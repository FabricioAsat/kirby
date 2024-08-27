import { k } from "../main";

export function generateMappings(tileType) {
  return {
    0: () => [
      k.sprite(tileType, { anim: "top-left-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    1: () => [
      k.sprite(tileType, { anim: "top-middle-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    2: () => [
      k.sprite(tileType, { anim: "top-right-grass" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    3: () => [k.sprite(tileType, { anim: "middle-left-ground" }), k.offscreen()],
    4: () => [k.sprite(tileType, { anim: "middle-middle-ground" }), k.offscreen()],
    5: () => [k.sprite(tileType, { anim: "middle-right-ground" }), k.offscreen()],
    6: () => [k.sprite(tileType, { anim: "bottom-left-ground" }), k.offscreen()],
    7: () => [k.sprite(tileType, { anim: "bottom-middle-ground" }), k.offscreen()],
    8: () => [k.sprite(tileType, { anim: "bottom-middle-brick" }), k.offscreen()],
    9: () => [k.sprite(tileType, { anim: "bottom-right-brick" }), k.offscreen()],
    a: () => [k.sprite(tileType, { anim: "full-ground" }), k.offscreen()],
    b: () => [k.sprite(tileType, { anim: "medium-ground" }), k.offscreen()],
    c: () => [k.sprite(tileType, { anim: "empty-ground" }), k.offscreen()],
    d: () => [
      k.sprite(tileType, { anim: "top-middle-brick" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    e: () => [
      k.sprite(tileType, { anim: "top-right-brick" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    f: () => [k.sprite(tileType, { anim: "middle-top-left-grass" }), k.offscreen()],
    g: () => [k.sprite(tileType, { anim: "bottom-left-brick" }), k.offscreen()],
    h: () => [
      k.sprite(tileType, { anim: "top-left-brick" }),
      k.area({ shape: new k.Rect(k.vec2(0), 16, 5) }),
      "passthrough",
      k.body({ isStatic: true }),
      k.offscreen(),
    ],
    i: () => [k.sprite(tileType, { anim: "bottom-right-ground" }), k.offscreen()],
    j: () => [k.sprite(tileType, { anim: "middle-top-right-grass" }), k.offscreen()],
    "*": () => [k.sprite("block-sprite"), k.area({ shape: new k.Rect(k.vec2(0), 16, 16) }), k.body({ isStatic: true }), k.offscreen()],
  };
}
