import { k } from "../main";

export class Apple {
  apple;

  constructor(position) {
    this.apple = add([
      k.sprite("apple", { anim: "roll" }),
      k.area({ shape: new Rect(vec2(0, 0), 16, 16), collisionIgnore: ["elephant", "block"] }),
      k.anchor("center"),
      k.pos(position),
      k.scale(3),
      k.body(),
      k.offscreen(),
      { speed: 300, side: "left", isInhalable: true },
      "apple",
    ]);
  }

  setMovementPattern() {
    this.apple.onUpdate(() => {
      this.apple.move(this.apple.side === "left" ? -this.apple.speed : this.apple.speed, 0);
      if (this.apple.isGrounded()) {
        this.apple.jump(550);
      }
      if (this.apple.pos.x < 0 || this.apple.pos.x > 1440) k.destroy(this.apple);
    });

    this.apple.onCollide("shootingStar", (star) => {
      k.play("enemy-dead", { volume: 0.25 });
      k.destroy(this.apple);
      k.destroy(star);
    });
  }
}
