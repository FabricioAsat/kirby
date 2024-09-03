import { k } from "../main";

export class Fish {
  constructor(positions, amplitudes) {
    this.amplitudes = amplitudes;
    this.fish = [];
    for (const position of positions) {
      this.fish.push(
        add([
          k.sprite("fish", { anim: "swim-up" }),
          k.area({ shape: new Rect(vec2(0, 0), 18, 18) }),
          k.anchor("center"),
          k.pos(position),
          k.scale(3),
          k.state("launch", ["launch", "fall"]),
          k.offscreen({ hide: true }),
          { isInhalable: false },
          "fish",
        ])
      );
    }
  }

  setMovementPattern() {
    for (const [index, fish] of this.fish.entries()) {
      const launch = fish.onStateEnter("launch", async () => {
        if (fish.curAnim() !== "swim-up") fish.play("swim-up");
        await tween(fish.pos.y, fish.pos.y - this.amplitudes[index], 2, (posY) => (fish.pos.y = posY), easings.easeOutSine);
        fish.enterState("fall");
      });

      const fall = fish.onStateEnter("fall", async () => {
        if (fish.curAnim() !== "swim-down") fish.play("swim-down");
        await tween(fish.pos.y, fish.pos.y + this.amplitudes[index], 2, (posY) => (fish.pos.y = posY), easings.easeOutSine);
        fish.enterState("launch");
      });

      onSceneLeave(() => {
        launch.cancel();
        fall.cancel();
      });
    }
  }
}
