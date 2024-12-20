import { k } from "../main";

export class Bird {
  amplitude = 100;
  frequency = 0.01;
  speed = 150;
  pos;

  constructor(positions) {
    this.pos = positions;
    this.birds = [];
    for (const position of positions) {
      this.birds.push(
        add([
          k.sprite("bird", { anim: "fly" }),
          k.area({ shape: new Rect(vec2(0, 0), 18, 18) }),
          k.anchor("center"),
          k.pos(position),
          k.scale(3),
          k.offscreen({ hide: true }),
          { isInhalable: false },
          "bird",
        ])
      );
    }
  }

  setMovementPattern(maxTiles = 120) {
    for (const [index, bird] of this.birds.entries()) {
      bird.onUpdate(() => {
        bird.move(-this.speed, 0);
        bird.pos.y = this.pos[index].y + this.amplitude * Math.cos(bird.pos.x * this.frequency);
        if (bird.pos.x < 0) {
          bird.pos.x = 48 * maxTiles;
        }
      });
      bird.onCollide("shootingStar", (bird) => {
        k.play("enemy-dead", { volume: 0.25 });
        k.destroy(bird);
      });
    }
  }
}
