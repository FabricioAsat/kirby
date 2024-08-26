import { k } from "../main";

export class Player {
  startAbsorbingEnded = false;
  isFull = false;
  isJumpOnce = false;

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
      if (k.isKeyDown("x")) return;
      if (k.isKeyDown("right") && k.isKeyDown("left")) {
        this.gameObj.play("idle");
        return;
      }
      if (this.gameObj.curAnim() !== "walk") this.gameObj.play("walk");
      this.gameObj.flipX = true;
      this.gameObj.move(-this.speed, 0);
    });

    k.onKeyDown("right", () => {
      if (k.isKeyDown("x")) return;
      if (k.isKeyDown("left") && k.isKeyDown("right")) {
        this.gameObj.play("idle");
        return;
      }
      if (this.gameObj.curAnim() !== "walk") this.gameObj.play("walk");
      this.gameObj.flipX = false;
      this.gameObj.move(this.speed, 0);
    });

    k.onKeyPress("z", () => {
      if (k.isKeyDown("x")) return;
      this.gameObj.jump(this.jumpForce);

      if (this.isJumpOnce) {
        this.isFull = true;
        this.gameObj.play("full");
      } else this.gameObj.play("jump");

      this.isJumpOnce = true;
      //   if (this.gameObj.isGrounded()) {}
    });

    k.onKeyPress("x", () => {
      if (!this.isFull) {
        if (this.gameObj.curAnim() !== "start-absorb") {
          this.gameObj.play("start-absorb", {
            onEnd: () => {
              k.onKeyDown("x", () => {
                if (this.gameObj.curAnim() !== "absorb") {
                  this.gameObj.play("absorb");
                }
              });
            },
          });
        }
      } else {
        if (this.gameObj.curAnim() !== "split-star")
          this.gameObj.play("split-star", {
            onEnd: () => {
              //   this.gameObj.play("idle");
              this.isJumpOnce = false;
              this.isFull = false;
            },
          });
      }
    });

    //
    k.onKeyRelease(() => {
      if (this.gameObj.paused) return;
      if (k.isKeyReleased("right") || k.isKeyReleased("left") || k.isKeyReleased("x")) {
        this.gameObj.play("idle");
      }
    });
  }

  respawnPlayer() {
    if (this.numberLives > 0) {
      this.gameObj.pos = k.vec2(this.initialXPos, this.initialYPos);
    }
  }

  update() {
    k.onUpdate(() => {
      //   TODO - Poner límites al mapa
    });
  }
}
