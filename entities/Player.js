import { levelSelectConfig } from "../content/levelSelection/config";
import { k } from "../main";

export class Player {
  isFull = false;
  isJumpOnce = false;
  previousHeight;
  isMoving = false;
  heightDelta = 0;
  isRunning = false;
  isAbsorbing = false;
  isSpliting = false;

  constructor(posX, posY, speed, jumpForce, numberLives, currentLevelScene, isInTerminalScene) {
    this.currentLevelScene = currentLevelScene;
    this.isInTerminalScene = isInTerminalScene;
    this.initialXPos = posX;
    this.initialYPos = posY;

    this.makePlayer();
    this.setPlayerControls();
    this.speed = speed;
    this.jumpForce = jumpForce;
    this.numberLives = numberLives;
    this.previousHeight = this.gameObj.pos.y;
    // Falta una variable, revisar luego.
  }

  makePlayer() {
    this.gameObj = k.add([
      k.sprite("kirby", { anim: "idle" }),
      k.area({ shape: new k.Rect(k.vec2(0, 0), 20, 18) }),
      k.anchor("center"),
      k.pos(this.initialXPos, this.initialYPos),
      k.scale(3),
      k.body(),
      "kirby-sprites",
    ]);
  }

  setPlayerControls() {
    k.onKeyDown("left", () => {
      if (!this.isFull) {
        if (k.isKeyDown("x") || this.isSpliting) return;
        if (k.isKeyDown("right") && k.isKeyDown("left")) {
          this.isMoving = false;
          if (this.gameObj.curAnim() !== "idle") this.gameObj.play("idle");
          return;
        }
        if (this.gameObj.curAnim() !== "walk" && this.heightDelta === 0 && !this.isRunning) this.gameObj.play("walk");
        this.gameObj.flipX = true;
        this.isMoving = true;
        this.gameObj.move(-this.speed, 0);
      } else {
        if (this.isSpliting) return;
        if (k.isKeyDown("left") && k.isKeyDown("right")) {
          this.isMoving = false;
          if (this.gameObj.curAnim() !== "full") this.gameObj.play("full");
          return;
        }
        if (this.gameObj.curAnim() !== "full-walk" && this.heightDelta === 0 && !this.isRunning) this.gameObj.play("full-walk");
        this.gameObj.flipX = true;
        this.gameObj.move(-this.speed, 0);
        this.isMoving = true;
      }
    });

    k.onKeyDown("right", () => {
      if (!this.isFull) {
        if (k.isKeyDown("x") || this.isSpliting) return;
        if (k.isKeyDown("left") && k.isKeyDown("right")) {
          this.isMoving = false;
          if (this.gameObj.curAnim() !== "idle") this.gameObj.play("idle");
          return;
        }
        if (this.gameObj.curAnim() !== "walk" && this.heightDelta === 0 && !this.isRunning) this.gameObj.play("walk");
        this.gameObj.flipX = false;
        this.gameObj.move(this.speed, 0);
        this.isMoving = true;
      } else {
        if (this.isSpliting) return;
        if (k.isKeyDown("left") && k.isKeyDown("right")) {
          this.isMoving = false;
          if (this.gameObj.curAnim() !== "full") this.gameObj.play("full");
          return;
        }
        if (this.gameObj.curAnim() !== "full-walk" && this.heightDelta === 0 && !this.isRunning) this.gameObj.play("full-walk");

        this.gameObj.flipX = false;
        this.gameObj.move(this.speed, 0);
        this.isMoving = true;
      }
    });

    k.onKeyDown("x", () => {
      if (!this.isFull) {
        this.isMoving = false;
        if (this.isAbsorbing) return;
        if (this.gameObj.curAnim() !== "start-absorb")
          this.gameObj.play("start-absorb", {
            onEnd: () => {
              this.isAbsorbing = true;
            },
          });
      } else {
        this.isSpliting = true;
        this.isMoving = false;
      }
    });

    k.onKeyDown("shift", () => {
      if (this.isFull) return;
      if (k.isKeyDown("x")) return;
      if (!this.gameObj.isGrounded()) {
        this.isRunning = false;
        this.speed = levelSelectConfig.kirbySpeed;
        return;
      }
      this.isRunning = true;
      this.speed = 450;
    });

    k.onKeyPress("z", () => {
      if (k.isKeyDown("x")) return;
      if (!this.gameObj.isGrounded() && this.gameObj.curAnim() !== "full") {
        this.gameObj.play("full");
        this.isFull = true;
      }
      this.gameObj.jump(this.jumpForce);
      k.play("jump");
    });

    //
    k.onKeyRelease(() => {
      // if (this.gameObj.paused) return;
      if (k.isKeyReleased("right") || k.isKeyReleased("left")) {
        this.isMoving = false;
        if (this.isAbsorbing) return;
        this.gameObj.play("idle");
      }
      if (k.isKeyReleased("shift")) {
        this.isRunning = false;
        this.speed = levelSelectConfig.kirbySpeed;
        if (this.isAbsorbing) return;
      }

      if (k.isKeyReleased("x")) {
        this.isAbsorbing = false;
      }
    });
  }

  // Resetea al juegador al spawnpoint
  respawnPlayer() {
    if (this.numberLives > 0) {
      this.gameObj.pos = k.vec2(this.initialXPos, this.initialYPos);
    }
  }

  // Código para pasar por sobre las hitbox al saltar
  enablePassthrough() {
    this.gameObj.onBeforePhysicsResolve((collision) => {
      if (collision.target.is("passthrough") && this.gameObj.isJumping()) {
        collision.preventResolution();
      }
    });
  }

  update() {
    k.onUpdate(() => {
      this.heightDelta = this.previousHeight - this.gameObj.pos.y;
      this.previousHeight = this.gameObj.pos.y;

      if (!this.isMoving && this.gameObj.curAnim() !== "absorb" && this.isAbsorbing) {
        this.gameObj.play("absorb");
      }

      if (!this.gameObj.isGrounded() && this.heightDelta > 0) {
        if (this.isSpliting) {
          if (this.gameObj.curAnim() !== "split-star")
            this.gameObj.play("split-star", {
              onEnd: () => {
                this.isSpliting = false;
                this.isFull = false;
              },
            });
        } else {
          if (!this.isFull) {
            if (this.gameObj.curAnim() !== "jump") this.gameObj.play("jump");
          } else {
            if (this.gameObj.curAnim() !== "full-jump") this.gameObj.play("full-jump");
          }
        }
      }

      if (!this.gameObj.isGrounded() && this.heightDelta < 0) {
        if (this.isSpliting) {
          if (this.gameObj.curAnim() !== "split-star")
            this.gameObj.play("split-star", {
              onEnd: () => {
                this.isSpliting = false;
                this.isFull = false;
              },
            });
        } else {
          if (!this.isFull) {
            if (this.gameObj.curAnim() !== "fall") this.gameObj.play("fall");
          } else {
            if (this.gameObj.curAnim() !== "full-fall") this.gameObj.play("full-fall");
          }
        }
      }
      if (!this.isMoving && this.heightDelta === 0 && !k.isKeyDown("x")) {
        if (!this.isFull) {
          if (this.gameObj.curAnim() !== "idle") this.gameObj.play("idle");
        } else {
          if (this.isSpliting) {
            if (this.gameObj.curAnim() !== "split-star")
              this.gameObj.play("split-star", {
                onEnd: () => {
                  this.isSpliting = false;
                  this.isFull = false;
                },
              });
          } else {
            if (this.gameObj.curAnim() !== "full") this.gameObj.play("full");
          }
        }
      }

      if (this.isMoving && this.gameObj.curAnim() !== "run" && this.isRunning && this.heightDelta === 0 && !this.isFull) {
        this.gameObj.play("run");
        k.play("run");
      }
    });
  }
}
