import { k } from "../../main";

export function generateLevelMapping(tileType) {
  return {
    0: () => [
      k.sprite(tileType, { anim: "top-left-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    1: () => [
      k.sprite(tileType, { anim: "top-middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    2: () => [
      k.sprite(tileType, { anim: "top-right-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    3: () => [k.sprite(tileType, { anim: "middle-left-grass" }), k.offscreen({ hide: true })],
    4: () => [k.sprite(tileType, { anim: "middle-middle-grass" }), k.offscreen({ hide: true })],
    5: () => [k.sprite(tileType, { anim: "middle-right-grass" }), k.offscreen({ hide: true })],
    6: () => [k.sprite(tileType, { anim: "bottom-left-grass" }), k.offscreen({ hide: true })],
    7: () => [k.sprite(tileType, { anim: "bottom-middle-grass" }), k.offscreen({ hide: true })],
    8: () => [k.sprite(tileType, { anim: "bottom-right-grass" }), k.offscreen({ hide: true })],
    9: () => [
      k.sprite(tileType, { anim: "left-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    a: () => [
      k.sprite(tileType, { anim: "middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    b: () => [
      k.sprite(tileType, { anim: "right-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 24) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
    ],
    c: () => [k.sprite(tileType, { anim: "grass-1" }), k.offscreen({ hide: true })],
    d: () => [k.sprite(tileType, { anim: "grass-2" }), k.offscreen({ hide: true })],
    e: () => [k.sprite(tileType, { anim: "grass-3" }), k.offscreen({ hide: true })],
    "*": () => [
      k.sprite("level-1-tileset", { anim: "middle-middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 48, 48) }),
      k.body({ isStatic: true }),
      k.offscreen({ hide: true }),
      "block"
    ],
    "(": () => [k.sprite("door-2", { anim: "top" }), k.area({ shape: new k.Rect(k.vec2(0), 48, 48) }), k.offscreen({ hide: true }), "door-2"],
    ")": () => [k.sprite("door-2", { anim: "bottom" }), k.area({ shape: new k.Rect(k.vec2(0), 48, 48) }), k.offscreen({ hide: true }), "door-2"],
  };
}
