export const level1Config = {
  gravity: 1400,
  xPos: 100,
  yPos: 100,
  kirbySpeed: 300,
  kirbyJumpForce: 600,
  kirbyLives: 1,
  fishPositions: [
    () => vec2(1536 - 24, 100 + 768 + (24 - 16) * 48),
    () => vec2(1680, 200 + 768 + (24 - 16) * 48),
    () => vec2(1872 - 24, 300 + 768 + (24 - 16) * 48),
    () => vec2(4608 - 24, 100 + 768 + (24 - 16) * 48),
    () => vec2(4704 - 24, 100 + 768 + (24 - 16) * 48),
    () => vec2(4800 - 24, 100 + 768 + (24 - 16) * 48),
  ],
  fishAmplitudes: [800, 900, 1000, 500, 500, 500],
};
