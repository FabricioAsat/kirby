import { k } from "../main";

export class E_Super {
  constructor(positions) {
    this.supers = [];
    for (const position of positions) {
      this.supers.push(
        add([
          k.sprite("super", { anim: "walk" }),
          k.area({ shape: new Rect(vec2(0, 0), 18, 18), collisionIgnore: ["fish", "supers"] }),
          k.anchor("center"),
          k.pos(position),
          k.scale(3),
          k.body(),
          k.state("wLeft", ["wLeft", "wRight", "fall", "sJump", "eJump"]),
          k.offscreen({ hide: true }),
          { speed: 96, side: "left", isInhalable: false },
          "super",
        ])
      );
    }
  }

  setMovementPattern() {
    for (const [index, eSuper] of this.supers.entries()) {
      this.enablePassthrough(eSuper);
      const wLeft = eSuper.onStateEnter("wLeft", async () => {
        eSuper.flipX = false;

        await k.wait(5);
        eSuper.enterState("sJump");
      });

      const wRight = eSuper.onStateEnter("wRight", async () => {
        eSuper.flipX = true;

        await k.wait(5);
        eSuper.enterState("sJump");
      });

      const sJump = eSuper.onStateEnter("sJump", async () => {
        await k.wait(0.25);
        eSuper.enterState("eJump");
      });

      const eJump = eSuper.onStateEnter("eJump", () => {
        eSuper.jump(750);
      });

      const fall = eSuper.onStateEnter("fall", () => {});

      eSuper.onStateUpdate("wRight", () => {
        if (eSuper.curAnim() !== "walk") eSuper.play("walk");
        if (eSuper.isGrounded()) eSuper.move(eSuper.speed, 0);
      });

      eSuper.onStateUpdate("wLeft", () => {
        if (eSuper.curAnim() !== "walk") eSuper.play("walk");
        if (eSuper.isGrounded()) eSuper.move(-eSuper.speed, 0);
      });

      eSuper.onStateUpdate("sJump", () => {
        if (eSuper.curAnim() !== "jump-start") eSuper.play("jump-start");
      });

      eSuper.onStateUpdate("eJump", () => {
        if (eSuper.curAnim() !== "jump-end") eSuper.play("jump-end");
        if (eSuper.isFalling()) eSuper.enterState("fall");
      });

      eSuper.onStateUpdate("fall", () => {
        if (eSuper.curAnim() !== "fall") eSuper.play("fall");
        if (eSuper.isGrounded()) {
          //   if (eSuper.curAnim() !== "jump-start") eSuper.play("jump-start");
          //   await k.wait(0.5);

          if (eSuper.side === "left") {
            eSuper.side = "right";
            eSuper.enterState("wRight");
          } else {
            eSuper.enterState("wLeft");
            eSuper.side = "left";
          }
        }
      });

      k.onSceneLeave(() => {
        wLeft.cancel();
        wRight.cancel();
        sJump.cancel();
        eJump.cancel();
        fall.cancel();
      });

      eSuper.onCollide("shootingStar", (eSuper) => {
        k.play("enemy-dead", { volume: 0.25 });
        k.destroy(eSuper);
      });
    }
  }

  // Código para pasar por sobre las hitbox al saltar
  enablePassthrough(obj) {
    obj.onBeforePhysicsResolve((collision) => {
      if (collision.target.is("passthrough") && obj.isJumping()) {
        collision.preventResolution();
      }
    });
  }
}
