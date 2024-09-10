export const level3Config = {
  gravity: 1400,
  xPos: 150,
  yPos: 350,
  kirbySpeed: 300,
  kirbyJumpForce: 600,
  kirbyLives: 2,

  fishPositions: [
    () => vec2(768, 100 + 768 + (24 - 16) * 48),
    () => vec2(864, 100 + 768 + (24 - 16) * 48),

    () => vec2(1368, 100 + 768 + (24 - 16) * 48),
    () => vec2(1488, 100 + 768 + (24 - 16) * 48),
    () => vec2(1608, 100 + 768 + (24 - 16) * 48),

    () => vec2(2208, 100 + 768 + (24 - 16) * 48),
    () => vec2(2304, 100 + 768 + (24 - 16) * 48),
    () => vec2(2400, 100 + 768 + (24 - 16) * 48),
    () => vec2(2496, 100 + 768 + (24 - 16) * 48),
    () => vec2(2592, 100 + 768 + (24 - 16) * 48),

    () => vec2(2784, 100 + 768 + (24 - 16) * 48),
    () => vec2(2880, 100 + 768 + (24 - 16) * 48),
    () => vec2(2976, 100 + 768 + (24 - 16) * 48),
    () => vec2(3072, 100 + 768 + (24 - 16) * 48),
    () => vec2(3168, 100 + 768 + (24 - 16) * 48),

    () => vec2(3360, 100 + 768 + (24 - 16) * 48),
    () => vec2(3456, 100 + 768 + (24 - 16) * 48),
    () => vec2(3552, 100 + 768 + (24 - 16) * 48),
    () => vec2(3684, 100 + 768 + (24 - 16) * 48),

    () => vec2(3744, 100 + 768 + (24 - 16) * 48),
    () => vec2(3840, 100 + 768 + (24 - 16) * 48),
    () => vec2(3936, 100 + 768 + (24 - 16) * 48),

    () => vec2(4128, 100 + 768 + (24 - 16) * 48),
    () => vec2(4224, 100 + 768 + (24 - 16) * 48),
    () => vec2(4320, 100 + 768 + (24 - 16) * 48),
  ],
  fishAmplitudes: [
    500, 500, 700, 700, 700, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050, 1050,
  ],

  eSuperPositions: [
    () => vec2(1000, 0),
    () => vec2(5616, 0),
    () => vec2(5756, 100),
    () => vec2(5950, 75),
    () => vec2(7008, 75),
    () => vec2(5520, 700),
    () => vec2(7008, 75),
    () => vec2(7008, 400),
  ],

  birdsPositions: [
    () => vec2(700, 300),
    () => vec2(1400, 300),
    () => vec2(2100, 300),
    () => vec2(2800, 300),
    () => vec2(3500, 300),
    () => vec2(4200, 300),
    () => vec2(4900, 300),
    () => vec2(5400, 300),
    () => vec2(1000, 500),
    () => vec2(1700, 500),
    () => vec2(2400, 700),
    () => vec2(3100, 300),
    () => vec2(3900, 800),
    () => vec2(4600, 300),
    () => vec2(5200, 600),
    () => vec2(5700, 200),
  ],
};