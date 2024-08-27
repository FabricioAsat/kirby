// * Images - Main
import menuBg from "../assets/images/backgrounds/main/menu-bg.jpg";
import menuTitleLogo from "../assets/images/backgrounds/main/title-menu-logo.webp";
import pressEnter from "../assets/images/backgrounds/main/press-enter-to-start.png";
// Images - Menu
import gameSelectImage from "../assets/images/backgrounds/menu/game-select.png";
import startGameOptionImage from "../assets/images/backgrounds/menu/start-game.png";
import viewControlsOptionImage from "../assets/images/backgrounds/menu/view-controls.png";
import quitGameOptionImage from "../assets/images/backgrounds/menu/quit-game.png";
// Images - Controls
import controlsImage from "../assets/images/backgrounds/controls/controls.png";
import backMenuImage from "../assets/images/backgrounds/controls/back-menu.png";
import controlUpImage from "../assets/images/backgrounds/controls/f-up.png";
import upImage from "../assets/images/backgrounds/controls/up.png";
import controlDownImage from "../assets/images/backgrounds/controls/f-down.png";
import downImage from "../assets/images/backgrounds/controls/down.png";
import controlLeftImage from "../assets/images/backgrounds/controls/f-left.png";
import leftImage from "../assets/images/backgrounds/controls/left.png";
import controlRightImage from "../assets/images/backgrounds/controls/f-right.png";
import rightImage from "../assets/images/backgrounds/controls/right.png";
import controlJumpImage from "../assets/images/backgrounds/controls/z-jump.png";
import jumpImage from "../assets/images/backgrounds/controls/jump.png";
import controlAbsorbImage from "../assets/images/backgrounds/controls/x-absorb.png";
import absorbImage from "../assets/images/backgrounds/controls/absorb.png";

// Images - Level Selection Stage 1
import levelSelectionStage1Tileset from "../assets/images/sprites/level-selection-stage1-tileset.png";
import levelSelectionBg from "../assets/images/backgrounds/levels/level-selection-bg.png";
import blockSprite from "../assets/images/sprites/block.png";

// Animations
import kirbySprites from "../assets/images/animations/kirby-sprites.png";

// Sounds
import confirmUiSound from "../assets/sounds/confirm-ui.wav";
import buttonHoveredSound from "../assets/sounds/button-hovered.wav";
import kirbyJumpSound from "../assets/sounds/kirby-jump.wav";
import kirbyRunSound from "../assets/sounds/kirby-run.wav";

// Musics
import mainMenuMusic from "../assets/sounds/main-menu.mp3";

// Context
import { k } from "../main";

export const load = {
  assets: () => {
    // Main
    k.loadSprite("menu-bg", menuBg);
    k.loadSprite("menu-title-logo", menuTitleLogo);
    k.loadSprite("press-enter", pressEnter);

    // Menu
    k.loadSprite("game-select", gameSelectImage);
    k.loadSprite("start-game", startGameOptionImage);
    k.loadSprite("view-controls", viewControlsOptionImage);
    k.loadSprite("quit-game", quitGameOptionImage);

    // Controls
    k.loadSprite("controls", controlsImage);
    k.loadSprite("back-menu", backMenuImage);
    k.loadSprite("f-up", controlUpImage);
    k.loadSprite("up", upImage);
    k.loadSprite("f-down", controlDownImage);
    k.loadSprite("down", downImage);
    k.loadSprite("f-left", controlLeftImage);
    k.loadSprite("left", leftImage);
    k.loadSprite("f-right", controlRightImage);
    k.loadSprite("right", rightImage);
    k.loadSprite("z-jump", controlJumpImage);
    k.loadSprite("jump", jumpImage);
    k.loadSprite("x-absorb", controlAbsorbImage);
    k.loadSprite("absorb", absorbImage);

    // Level Selection Stage 1
    k.loadSprite("level-selection-bg", levelSelectionBg);
    k.loadSprite("block-sprite", blockSprite);
    k.loadSprite("level-selection-stage-1-tileset", levelSelectionStage1Tileset, {
      sliceX: 4,
      sliceY: 5,
      anims: {
        "top-left-grass": 0,
        "top-middle-grass": 1,
        "top-right-grass": 2,
        "middle-top-right-grass": 3,
        "middle-top-left-grass": 4,
        "full-ground": 5,
        "medium-ground": 6,
        "empty-ground": 7,
        "middle-left-ground": 8,
        "middle-middle-ground": 9,
        "middle-right-ground": 10,
        "bottom-left-ground": 11,
        "bottom-middle-ground": 12,
        "bottom-right-ground": 13,
        "top-left-brick": 14,
        "top-middle-brick": 15,
        "top-right-brick": 16,
        "bottom-left-brick": 17,
        "bottom-middle-brick": 18,
        "bottom-right-brick": 19,
      },
    });

    // Animations
    k.loadSprite("kirby", kirbySprites, {
      sliceX: 16,
      sliceY: 16,
      anims: {
        idle: { from: 0, to: 9, loop: true, speed: 5 },
        walk: { from: 16, to: 25, loop: true, speed: 13 },
        run: { from: 32, to: 39, loop: true, speed: 20 },
        jump: { from: 48, to: 48, loop: true, speed: 1 },
        fall: { from: 64, to: 65, loop: true, speed: 13 },
        crouched: { from: 80, to: 80, loop: true, speed: 1 },
        "start-absorb": { from: 96, to: 98, loop: false, speed: 13 },
        absorb: { from: 98, to: 100, loop: true, speed: 13 },
        hurt: { from: 112, to: 120, loop: false, speed: 13 },
        swallow: { from: 128, to: 135, loop: false, speed: 13 },
        sleep: { from: 144, to: 158, loop: false, speed: 5 },
        full: { from: 160, to: 163, loop: true, speed: 13 },
        "full-walk": { from: 176, to: 191, loop: true, speed: 13 },
        "full-jump": { from: 192, to: 192, loop: true, speed: 1 },
        "full-fall": { from: 208, to: 208, loop: true, speed: 1 },
        "full-hurt": { from: 224, to: 227, loop: false, speed: 13 },
        "split-star": { from: 240, to: 244, loop: false, speed: 1 },
      },
    });
  },

  sounds: () => {
    k.loadSound("confirm-ui", confirmUiSound);
    k.loadSound("button-hovered", buttonHoveredSound);
    k.loadSound("jump", kirbyJumpSound);
    k.loadSound("run", kirbyRunSound);
  },

  music: () => {
    k.loadSound("main-menu-music", mainMenuMusic);
  },
};
