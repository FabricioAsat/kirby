import { k } from "../../main";

export function generateLevelMapping(tileType) {
  return {
    0: () => [
      k.sprite(tileType, { anim: "top-left-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    1: () => [
      k.sprite(tileType, { anim: "top-middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    2: () => [
      k.sprite(tileType, { anim: "top-right-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    3: () => [k.sprite(tileType, { anim: "middle-left-grass" }), k.offscreen()],
    4: () => [k.sprite(tileType, { anim: "middle-middle-grass" }), k.offscreen()],
    5: () => [k.sprite(tileType, { anim: "middle-right-grass" }), k.offscreen()],
    6: () => [k.sprite(tileType, { anim: "bottom-left-grass" }), k.offscreen()],
    7: () => [k.sprite(tileType, { anim: "bottom-middle-grass" }), k.offscreen()],
    8: () => [k.sprite(tileType, { anim: "bottom-right-grass" }), k.offscreen()],
    9: () => [
      k.sprite(tileType, { anim: "left-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    a: () => [
      k.sprite(tileType, { anim: "middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    b: () => [
      k.sprite(tileType, { anim: "right-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    c: () => [k.sprite(tileType, { anim: "grass-1" }), k.offscreen()],
    d: () => [k.sprite(tileType, { anim: "grass-2" }), k.offscreen()],
    e: () => [k.sprite(tileType, { anim: "grass-3" }), k.offscreen()],
    "*": () => [
      k.sprite("level-1-tileset", { anim: "middle-middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 48) }),
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
  };
}
