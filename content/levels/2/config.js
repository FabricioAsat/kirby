export const level2Config = {
  gravity: 1400,
  xPos: 150,
  yPos: 350,
  kirbySpeed: 300,
  kirbyJumpForce: 600,
  kirbyLives: 2,

  fishPositions: [
    () => vec2(1448, 100 + 768 + (24 - 16) * 48),
    () => vec2(1584, 100 + 768 + (24 - 16) * 48),
    () => vec2(3504 - 48, 100 + 768 + (24 - 16) * 48),
    () => vec2(3552 + 24, 100 + 768 + (24 - 16) * 48),
  ],
  fishAmplitudes: [800, 800, 1000, 1000],

  eSuperPositions: [() => vec2(3120, 0), () => vec2(864, 800), () => vec2(3002, 400), () => vec2(6816, 400), () => vec2(5420, 400)],

  birdsPositions: [
    () => vec2(700, 300),
    () => vec2(800, 400),
    () => vec2(1200, 400),
    () => vec2(1800, 200),
    () => vec2(2800, 400),
    () => vec2(3300, 500),
    () => vec2(3900, 700),
    () => vec2(4500, 300),
  ],
};
