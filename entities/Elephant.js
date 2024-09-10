import { k } from "../main";
import { Apple } from "./Apple";

export class Elephant {
  boss;
  apple;
  random;
  initialPos;
  constructor(position) {
    this.initialPos = position;
    this.boss = add([
      k.sprite("elephant", { anim: "idle" }),
      k.area({ shape: new Rect(vec2(0, 0), 48, 48), collisionIgnore: ["apple", "block"] }),
      k.anchor("center"),
      k.pos(position),
      k.scale(3),
      k.body(),
      k.state("idle", ["idle", "roll", "s-jump", "e-jump", "fall", "dance", "hurt", "dead"]),
      k.offscreen({ destroy: true }),
      { speed: 450, health: 1, side: "left", patt: null, patt0Jumps: 0, patt1Jump: false, patt1WasCollided: false, endPattern: true },
      "elephant",
    ]);
  }

  setMovementPattern(kirby, ambientMusic) {
    this.boss.onStateEnter("idle", async () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }

      if (kirby.gameObj.pos.x < this.boss.pos.x) {
        this.boss.flipX = false;
        this.boss.side = "left";
      } else {
        this.boss.flipX = true;
        this.boss.side = "rigth";
      }

      if (!this.boss.isGrounded()) {
        this.boss.enterState("fall");
        return;
      }
      if (this.boss.curAnim() !== "idle") this.boss.play("idle");
      if (this.boss.endPattern) {
        this.random = Math.floor(Math.random() * 10);
        this.boss.endPattern = false;
      }
      await k.wait(2.5);

      if (this.random % 2 === 0) {
        this.boss.patt = 0;
        if (this.boss.patt0Jumps === 2) this.boss.enterState("dance");
        else this.boss.enterState("s-jump");
      } else {
        this.boss.enterState("roll");
      }
    });

    this.boss.onStateEnter("roll", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "roll") this.boss.play("roll");
      this.boss.jump(500);
    });
    this.boss.onStateUpdate("roll", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (!this.boss.patt1Jump && this.boss.isGrounded()) {
        k.shake(8);
        this.boss.patt1Jump = true;
      }

      this.boss.move(this.boss.side === "left" ? -this.boss.speed : this.boss.speed, 0);

      if (this.boss.pos.x - this.boss.area.shape.width <= 0 || this.boss.pos.x + this.boss.area.shape.width >= 1440) {
        if (this.boss.wasCollided) return;
        k.shake(8);
        this.resetVars();
        this.boss.jump(500);
        this.boss.move(this.boss.side === "left" ? 5000 : -5000, 0);
        this.boss.enterState("idle");
      }
    });

    this.boss.onStateEnter("s-jump", async () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "s-jump") this.boss.play("s-jump");
      if (this.boss.patt === 0) {
        await k.wait(0.05);
        this.boss.jump(750);
        this.boss.patt0Jumps++;
        this.boss.enterState("e-jump");
      }
    });

    this.boss.onStateEnter("e-jump", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "e-jump") this.boss.play("e-jump");
    });
    this.boss.onStateUpdate("e-jump", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.isFalling() && this.boss.patt === 0) this.boss.enterState("fall");
    });

    this.boss.onStateEnter("fall", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "fall") this.boss.play("fall");
    });

    this.boss.onStateUpdate("fall", () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.isFalling() && this.boss.curAnim() !== "fall") this.boss.play("fall");
      if (this.boss.isGrounded()) {
        k.shake(8);
        if (this.boss.patt === null) {
          this.boss.enterState("idle");
          return;
        }
        if (this.boss.patt === 0) {
          if (this.boss.patt0Jumps === 2) {
            this.boss.enterState("idle");
          } else this.boss.enterState("s-jump");
          return;
        }
      }
    });

    this.boss.onStateEnter("dance", async () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "dance") {
        this.boss.play("dance");
        this.apple = new Apple(this.boss.pos);
        kirby.gameObj.pos.x < this.boss.pos.x ? (this.apple.apple.side = "left") : (this.apple.apple.side = "right");
        this.apple.setMovementPattern();
        await k.wait(1.5);
        this.resetVars();
        this.boss.enterState("idle");
      }
    });

    this.boss.onStateEnter("hurt", async () => {
      if (this.boss.health === 0) {
        this.boss.enterState("dead");
        return;
      }
      if (this.boss.curAnim() !== "hurt") {
        this.boss.play("hurt");
        this.resetVars();
        this.boss.health--;
        this.boss.jump(200);
        this.boss.collisionIgnore.push("kirby");
        await k.wait(0.75);
        this.boss.collisionIgnore.pop();
        this.boss.enterState("idle");
      }
    });

    this.boss.onStateEnter("dead", async () => {
      if (this.boss.curAnim() !== "dead") {
        this.boss.play("dead");
        ambientMusic.stop();
        ambientMusic = k.play("winning-music", { volume: 0.2, loop: false });

        this.boss.jump(300);
        this.boss.collisionIgnore.push("kirby");
        await k.wait(2);
        k.destroy(this.boss);
      }
    });

    this.boss.onCollide("shootingStar", (star) => {
      k.play("enemy-dead", { volume: 0.25 });
      k.play("boss-hurt", { volume: 0.5 });
      k.destroy(star);
      this.boss.enterState("hurt");
    });
  }

  resetVars() {
    this.boss.patt = null;
    this.boss.patt0Jumps = 0;
    this.boss.patt1Jump = false;
    this.boss.patt1WasCollided = false;
    this.boss.endPattern = true;
  }

  updateHUD(UI) {
    this.boss.onUpdate(() => {
      if (this.boss.health >= 0)
        for (let index = 0; index < 15; index++) {
          if (index >= this.boss.health) UI.bossHealthCountUI[index].hidden = true;
          else UI.bossHealthCountUI[index].hidden = false;
        }
    });
  }
}
