import { levelSelectConfig } from "../content/levelSelection/config";
import { k } from "../main";
import { DOORS_POSITIONS } from "../utils/constants";

export class Player {
  isFull = false;
  isFullEnemy = false;
  previousHeight;
  isMoving = false;
  heightDelta = 0;
  isRunning = false;
  isAbsorbing = false;
  isSpliting = false;
  isVulnerable = true;
  hurtAnimFinished = true;
  isDead = false;
  inhaleEffect = null;
  inhaleZone = null;
  shootingStar = null;
  direction = "right";
  stopInhaleAnim = false;

  absorbingSound = k.play("absorb");

  constructor(posX, posY, speed, jumpForce, numberLives, currentLevelScene, isInTerminalScene) {
    this.absorbingSound.stop();
    this.currentLevelScene = currentLevelScene;
    this.isInTerminalScene = isInTerminalScene;
    this.initialXPos = posX;
    this.initialYPos = posY;

    this.makePlayer();
    this.setPlayerControls();
    this.makeInhaleZone();
    this.speed = speed;
    this.jumpForce = jumpForce;
    this.numberLives = numberLives;
    this.health = 3;
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
      k.rotate(0),
      k.opacity(1),
      "kirby",
    ]);
  }

  makeInhaleZone() {
    this.inhaleEffect = k.add([k.sprite("inhale-effect", { anim: "inhale" }), k.pos(), k.scale(3), k.opacity(0), "inhaleEffect"]);
    this.inhaleZone = this.gameObj.add([k.area({ shape: new k.Rect(k.vec2(9, -9), 40, 18) }), k.pos(), "inhaleZone"]);

    this.inhaleZone.onUpdate(() => {
      if (this.direction === "left") {
        this.inhaleZone.pos = k.vec2(-(18 * 3), 0);
        this.inhaleEffect.pos = k.vec2(this.gameObj.pos.x - 36 * 2 - 18 * 4, this.gameObj.pos.y - 18 * 3);
        this.inhaleEffect.flipX = true;
        return;
      }
      this.inhaleZone.pos = k.vec2(0, 0);
      this.inhaleEffect.pos = k.vec2(this.gameObj.pos.x + 36, this.gameObj.pos.y - 18 * 3);
      this.inhaleEffect.flipX = false;
    });
  }

  setPlayerControls() {
    k.onKeyDown("left", () => {
      if (this.isDead) return;
      if (!this.hurtAnimFinished) return;
      if (!this.isFull) {
        if (k.isKeyDown("x") || this.isSpliting) return;
        this.direction = "left";
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
        this.direction = "left";
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
      if (this.isDead) return;
      if (!this.hurtAnimFinished) return;
      if (!this.isFull) {
        if (k.isKeyDown("x") || this.isSpliting) return;
        this.direction = "right";
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
        this.direction = "right";
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
      if (this.isDead) return;
      if (!this.hurtAnimFinished) return;
      if (!this.isFull) {
        this.isMoving = false;
        if (this.isAbsorbing) return;
        if (this.gameObj.curAnim() !== "start-absorb") {
          this.gameObj.play("start-absorb", {
            onEnd: () => {
              this.isAbsorbing = true;
            },
          });
        }
      } else {
        if (this.stopInhaleAnim) {
          this.isSpliting = false;
          return;
        }
        this.isSpliting = true;
        this.isMoving = false;
      }
    });

    k.onKeyDown("shift", () => {
      if (this.isDead) return;
      if (!this.hurtAnimFinished) return;
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
      if (this.isDead) return;
      if (!this.hurtAnimFinished) return;
      if (k.isKeyDown("x")) return;
      if (!this.gameObj.isGrounded() && this.gameObj.curAnim() !== "full") {
        this.gameObj.play("full");
        this.isFull = true;
      }
      if (!this.isFullEnemy) {
        this.gameObj.jump(this.jumpForce);
        k.play("jump", { speed: 1.5 });
      } else {
        if (this.gameObj.isGrounded()) {
          this.gameObj.jump(this.jumpForce);
          k.play("jump", { speed: 1.5 });
        }
      }
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
        this.inhaleEffect.opacity = 0;
        this.stopInhaleAnim = false;
        this.absorbingSound.stop();
      }
    });
  }

  // Resetea al juegador al spawnpoint
  respawnPlayer() {
    if (this.currentLevelScene === "levelSelection") {
      this.gameObj.pos = k.vec2(this.initialXPos, this.initialYPos);
      return;
    }
    this.isDead = true;
    if (this.numberLives <= 0) {
      k.play("game-over");
      setTimeout(() => {
        this.resetBooleans();
        k.go("levelSelection");
      }, 3000);
    } else {
      k.play("lost-life");
      setTimeout(() => {
        this.resetBooleans();
        this.numberLives--;
        this.health = 3;
        this.gameObj.pos = k.vec2(this.initialXPos, this.initialYPos);
      }, 3000);
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
      if (this.isDead) {
        if (this.gameObj.curAnim() !== "dead") this.gameObj.play("dead");
        k.setGravity(0);
        return;
      }

      if (!this.hurtAnimFinished) {
        if (this.isFull) {
          if (this.gameObj.curAnim() !== "full-hurt") this.gameObj.play("full-hurt");
        } else {
          if (this.gameObj.curAnim() !== "hurt") this.gameObj.play("hurt");
        }

        setTimeout(() => {
          this.hurtAnimFinished = true;
        }, 500);
        return;
      }

      if (this.gameObj.pos.y > 768 + (24 - 16) * 48 - 48) {
        this.respawnPlayer();
      }

      this.heightDelta = this.previousHeight - this.gameObj.pos.y;
      this.previousHeight = this.gameObj.pos.y;

      if (!this.isMoving && this.isAbsorbing) {
        if (this.stopInhaleAnim) {
          this.isFull = true;
          this.isFullEnemy = true;
          this.inhaleEffect.opacity = 0;
          this.absorbingSound.stop();
          this.isAbsorbing = false;
          if (this.gameObj.curAnim() !== "full") this.gameObj.play("full");
          return;
        }
        if (this.gameObj.curAnim() !== "absorb") {
          this.gameObj.play("absorb");
          this.inhaleEffect.opacity = 1;
          this.absorbingSound.play();
        }
      }

      if (!this.gameObj.isGrounded() && this.heightDelta > 0) {
        if (this.isSpliting) {
          if (this.gameObj.curAnim() !== "split-star") {
            if (this.isFullEnemy) {
              k.play("split-star");
              this.shootingStar = k.add([
                k.sprite("star", {
                  anim: "star",
                  flipX: this.direction === "right",
                }),
                k.area({ shape: new k.Rect(k.vec2(0), 18, 18) }),
                k.pos(this.direction === "left" ? this.gameObj.pos.x - 80 : this.gameObj.pos.x + 80, this.gameObj.pos.y),
                k.scale(2.5),
                k.anchor("center"),
                k.offscreen({ destroy: true }),
                this.direction === "left" ? k.move(k.LEFT, 800) : k.move(k.RIGHT, 800),
                "shootingStar",
              ]);
              this.shootingStar.onCollide("super", (star) => {
                k.destroy(star);
              });
              this.shootingStar.onCollide("fish", (star) => {
                k.destroy(star);
              });
              this.shootingStar.onCollide("bird", (star) => {
                k.destroy(star);
              });
            } else k.play("split-air", { speed: 1.5 });

            this.gameObj.play("split-star", {
              onEnd: () => {
                this.isSpliting = false;
                this.isFull = false;
                this.isFullEnemy = false;
              },
            });
          }
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
          if (this.gameObj.curAnim() !== "split-star") {
            if (this.isFullEnemy) {
              k.play("split-star");
              this.shootingStar = k.add([
                k.sprite("star", {
                  anim: "star",
                  flipX: this.direction === "right",
                }),
                k.area({ shape: new k.Rect(k.vec2(0), 18, 18) }),
                k.pos(this.direction === "left" ? this.gameObj.pos.x - 80 : this.gameObj.pos.x + 80, this.gameObj.pos.y),
                k.scale(2.5),
                k.anchor("center"),
                k.offscreen({ destroy: true }),
                this.direction === "left" ? k.move(k.LEFT, 800) : k.move(k.RIGHT, 800),
                "shootingStar",
              ]);
              this.shootingStar.onCollide("super", (star) => {
                k.destroy(star);
              });
              this.shootingStar.onCollide("fish", (star) => {
                k.destroy(star);
              });
              this.shootingStar.onCollide("bird", (star) => {
                k.destroy(star);
              });
            } else k.play("split-air", { speed: 1.5 });
            this.gameObj.play("split-star", {
              onEnd: () => {
                this.isSpliting = false;
                this.isFull = false;
                this.isFullEnemy = false;
              },
            });
          }
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
            if (this.gameObj.curAnim() !== "split-star") {
              if (this.isFullEnemy) {
                k.play("split-star");
                this.shootingStar = k.add([
                  k.sprite("star", {
                    anim: "star",
                    flipX: this.direction === "right",
                  }),
                  k.area({ shape: new k.Rect(k.vec2(0), 18, 18) }),
                  k.pos(this.direction === "left" ? this.gameObj.pos.x - 80 : this.gameObj.pos.x + 80, this.gameObj.pos.y),
                  k.scale(2.5),
                  k.anchor("center"),
                  k.offscreen({ destroy: true }),
                  this.direction === "left" ? k.move(k.LEFT, 800) : k.move(k.RIGHT, 800),
                  "shootingStar",
                ]);
                this.shootingStar.onCollide("super", (star) => {
                  k.destroy(star);
                });
                this.shootingStar.onCollide("fish", (star) => {
                  k.destroy(star);
                });
                this.shootingStar.onCollide("bird", (star) => {
                  k.destroy(star);
                });
              } else k.play("split-air", { speed: 1.5 });
              this.gameObj.play("split-star", {
                onEnd: () => {
                  this.isSpliting = false;
                  this.isFull = false;
                  this.isFullEnemy = false;
                },
              });
            }
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
    this.updateLevelSelected();
  }

  updateHUD(UI) {
    k.onUpdate(() => {
      if (this.numberLives >= 0) UI.livesCountUI.text = `${this.numberLives > 9 ? "x" + this.numberLives : "x0" + this.numberLives}`;

      if (this.health >= 0)
        for (let index = 0; index < 7; index++) {
          if (index >= this.health) UI.healthCountUI[index].hidden = true;
          else UI.healthCountUI[index].hidden = false;
        }
    });
  }

  updateLevelSelected() {
    k.onUpdate(() => {
      if (this.currentLevelScene === "levelSelection") {
        if (
          Math.round(this.gameObj.pos.x) >= DOORS_POSITIONS.level1.xl &&
          Math.round(this.gameObj.pos.x) <= DOORS_POSITIONS.level1.xr &&
          Math.round(this.gameObj.pos.y) === DOORS_POSITIONS.level1.y &&
          k.isKeyPressed("up")
        ) {
          k.go("level1");
        }
        if (
          Math.round(this.gameObj.pos.x) >= DOORS_POSITIONS.level2.xl &&
          Math.round(this.gameObj.pos.x) <= DOORS_POSITIONS.level2.xr &&
          Math.round(this.gameObj.pos.y) === DOORS_POSITIONS.level2.y &&
          k.isKeyPressed("up")
        ) {
          k.go("level2");
        }
      }
    });
  }

  checkCollisions() {
    async function substrackHealth(context) {
      if (context.isDead || !context.isVulnerable) return;

      context.health--;
      if (context.health === 0) {
        context.respawnPlayer();
        return;
      }

      context.isVulnerable = false;
      context.hurtAnimFinished = false;

      context.isFull = false;
      context.isFullEnemy = false;
      context.inhaleEffect.opacity = 0;
      context.absorbingSound.stop();
      context.isAbsorbing = false;

      context.gameObj.move(-3500, -1500);
      k.play("hurt", { volume: 0.25 });
      context.wasHurt = true;

      // console.log(context);
      for (let index = 0; index <= 15; index++) {
        await k.tween(context.gameObj.opacity, 0, 0.075, (val) => (context.gameObj.opacity = val), k.easings.linear);
        await k.tween(context.gameObj.opacity, 1, 0.075, (val) => (context.gameObj.opacity = val), k.easings.linear);
        if (index === 15) context.isVulnerable = true;
      }
    }

    function makeInhalable(player, enemyName) {
      player.inhaleZone.onCollide(enemyName, (enemy) => {
        enemy.isInhalable = true;
        enemy.onUpdate(() => {
          if (player.isAbsorbing && enemy.isInhalable) {
            player.stopInhaleAnim = true;

            if (player.direction === "right") {
              enemy.move(-9999, 0);
              k.destroy(enemy);
              return;
            }
            enemy.move(9999, 0);
            k.destroy(enemy);
          }
        });
      });
      player.inhaleZone.onCollideEnd(enemyName, (enemy) => {
        enemy.isInhalable = false;
      });
    }

    this.gameObj.onCollide("super", (eSuper) => {
      substrackHealth(this);
      k.destroy(eSuper);
      if (!this.isFullEnemy) k.play("enemy-dead", { volume: 0.25 });
    });
    this.gameObj.onCollide("fish", (fish) => {
      substrackHealth(this);
      k.destroy(fish);
      if (!this.isFullEnemy) k.play("enemy-dead", { volume: 0.25 });
    });
    this.gameObj.onCollide("bird", (bird) => {
      substrackHealth(this);
      k.destroy(bird);
      if (!this.isFullEnemy) k.play("enemy-dead", { volume: 0.25 });
    });

    makeInhalable(this, "super");
    makeInhalable(this, "bird");
    makeInhalable(this, "fish");

    this.gameObj.onCollide("door-2", () => {
      k.onKeyPress("up", () => {
        k.go("levelSelection");
      });
    });
  }

  resetBooleans() {
    this.isFull = false;
    this.previousHeight;
    this.isMoving = false;
    this.heightDelta = 0;
    this.isRunning = false;
    this.isAbsorbing = false;
    this.isSpliting = false;
    this.isVulnerable = true;
    this.hurtAnimFinished = true;
    this.isDead = false;
    k.setGravity(1400);
  }

  //
}
