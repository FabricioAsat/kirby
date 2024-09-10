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
import controlRunImage from "../assets/images/backgrounds/controls/shift.png";
import runImage from "../assets/images/backgrounds/controls/run.png";

// Images - Level Selection Stage 1
import levelSelectionStage1Tileset from "../assets/images/sprites/level-selection-stage1-tileset.png";
import level1Tileset from "../assets/images/sprites/level-1-tileset.png";
import level2Tileset from "../assets/images/sprites/level-2-tileset.png";
import level3Tileset from "../assets/images/sprites/level-3-tileset.png";
import level4Tileset from "../assets/images/sprites/level-4-tileset.png";
import levelSelectionBg from "../assets/images/backgrounds/levels/level-selection-bg.png";
import level1Bg from "../assets/images/backgrounds/levels/level-1-bg.png";
import level2Bg from "../assets/images/backgrounds/levels/level-2-bg.jpg";
import level3Bg from "../assets/images/backgrounds/levels/level-3-bg.jpg";
import level4Bg from "../assets/images/backgrounds/levels/level-4-bg.png";
import blockSprite from "../assets/images/sprites/block.png";
import doorSprite from "../assets/images/sprites/door.png";
import door2Sprite from "../assets/images/sprites/door2.png";
import numbersSprites from "../assets/images/sprites/numbers.png";
import enemyDestroySprites from "../assets/images/sprites/enemy-destroy.png";
import inhaleEffect from "../assets/images/sprites/inhale-effect.png";

// Animations
import kirbySprites from "../assets/images/animations/kirby-sprites.png";
import fishSprites from "../assets/images/animations/fish-sprites.png";
import birdSprites from "../assets/images/animations/bird-sprites.png";
import superSprites from "../assets/images/animations/super-sprites.png";
import appleSprites from "../assets/images/animations/apple-sprites.png";
import elephantSprites from "../assets/images/animations/elephant-sprites.png";
import kirbyLives from "../assets/images/sprites/kirby-lives.png";
import PhanPhan from "../assets/images/sprites/phan-phan.webp";
import kirbyHealth from "../assets/images/sprites/kirby-health.png";
import starSprites from "../assets/images/sprites/star.png";

// Sounds
import confirmUiSound from "../assets/sounds/confirm-ui.wav";
import buttonHoveredSound from "../assets/sounds/button-hovered.wav";
import kirbyJumpSound from "../assets/sounds/kirby-jump.wav";
import kirbyRunSound from "../assets/sounds/kirby-run.wav";
import kirbyAbsorbSound from "../assets/sounds/kirby-absorb.wav";
import kirbySplitAirSound from "../assets/sounds/kirby-split-air.wav";
import kirbySplitStarSound from "../assets/sounds/kirby-split-star.wav";
import kirbyHurtSound from "../assets/sounds/kirby-hurt.wav";
import kirbyLostLifeSound from "../assets/sounds/kirby-lost-life.wav";
import kirbyGameOverSound from "../assets/sounds/kirby-game-over.wav";
import enemyDeadSound from "../assets/sounds/enemy-dead.wav";
import bossHurtSound from "../assets/sounds/boss-hurt.wav";

// Musics
import mainMenuMusic from "../assets/sounds/main-menu.mp3";
import levelSelectionMusic from "../assets/sounds/levelSelection.mp3";
import level1Music from "../assets/sounds/level1.mp3";
import level2Music from "../assets/sounds/level2.mp3";
import level3Music from "../assets/sounds/level3.mp3";
import level4Music from "../assets/sounds/level4.mp3";
import winningMusic from "../assets/sounds/winning.wav";

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
    k.loadSprite("shift-run", controlRunImage);
    k.loadSprite("run", runImage);

    // Level Selection Stage 1
    k.loadSprite("level-selection-bg", levelSelectionBg);
    k.loadSprite("level-1-bg", level1Bg);
    k.loadSprite("level-2-bg", level2Bg);
    k.loadSprite("level-3-bg", level3Bg);
    k.loadSprite("level-4-bg", level4Bg);
    k.loadSprite("block-sprite", blockSprite);
    k.loadSprite("kirby-lives", kirbyLives);
    k.loadSprite("phan-phan", PhanPhan);
    k.loadSprite("kirby-health", kirbyHealth);
    k.loadSprite("door", doorSprite, {
      sliceX: 4,
      sliceY: 1,
      anims: {
        "top-left-door": 2,
        "top-right-door": 3,
        "bottom-left-door": 0,
        "bottom-right-door": 1,
      },
    });
    k.loadSprite("door-2", door2Sprite, {
      sliceX: 2,
      sliceY: 1,
      anims: {
        top: 0,
        bottom: 1,
      },
    });
    k.loadSprite("star", starSprites, {
      sliceX: 4,
      sliceY: 1,
      anims: {
        star: { from: 0, to: 3, loop: true, speed: 24 },
      },
    });

    k.loadSprite("numbers", numbersSprites, {
      sliceX: 8,
      sliceY: 1,
      anims: {
        "left-1": 0,
        "right-1": 1,
        "left-2": 2,
        "right-2": 3,
        "left-3": 4,
        "right-3": 5,
        "left-4": 6,
        "right-4": 7,
      },
    });

    k.loadSprite("enemy-destroy", enemyDestroySprites, {
      sliceX: 2,
      sliceY: 1,
      anims: {
        destroy: { from: 0, to: 1, loop: false, speed: 24 },
      },
    });

    k.loadSprite("inhale-effect", inhaleEffect, {
      sliceX: 3,
      sliceY: 1,
      anims: {
        inhale: { from: 0, to: 2, loop: true, speed: 24 },
      },
    });

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
    k.loadSprite("level-1-tileset", level1Tileset, {
      sliceX: 3,
      sliceY: 5,
      anims: {
        "top-left-grass": 0,
        "top-middle-grass": 1,
        "top-right-grass": 2,
        "middle-left-grass": 3,
        "middle-middle-grass": 4,
        "middle-right-grass": 5,
        "bottom-left-grass": 6,
        "bottom-middle-grass": 7,
        "bottom-right-grass": 8,
        "left-grass": 9,
        "middle-grass": 10,
        "right-grass": 11,
        "grass-1": 12,
        "grass-2": 13,
        "grass-3": 14,
      },
    });
    k.loadSprite("level-2-tileset", level2Tileset, {
      sliceX: 3,
      sliceY: 5,
      anims: {
        "top-left-grass": 0,
        "top-middle-grass": 1,
        "top-right-grass": 2,
        "middle-left-grass": 3,
        "middle-middle-grass": 4,
        "middle-right-grass": 5,
        "bottom-left-grass": 6,
        "bottom-middle-grass": 7,
        "bottom-right-grass": 8,
        "left-grass": 9,
        "middle-grass": 10,
        "right-grass": 11,
        "grass-1": 12,
        "grass-2": 13,
        "grass-3": 14,
      },
    });
    k.loadSprite("level-3-tileset", level3Tileset, {
      sliceX: 3,
      sliceY: 5,
      anims: {
        "top-left-grass": 0,
        "top-middle-grass": 1,
        "top-right-grass": 2,
        "middle-left-grass": 3,
        "middle-middle-grass": 4,
        "middle-right-grass": 5,
        "bottom-left-grass": 6,
        "bottom-middle-grass": 7,
        "bottom-right-grass": 8,
        "left-grass": 9,
        "middle-grass": 10,
        "right-grass": 11,
        "grass-1": 12,
        "grass-2": 13,
        "grass-3": 14,
      },
    });
    k.loadSprite("level-4-tileset", level4Tileset, {
      sliceX: 3,
      sliceY: 5,
      anims: {
        "top-left-grass": 0,
        "top-middle-grass": 1,
        "top-right-grass": 2,
        "middle-left-grass": 3,
        "middle-middle-grass": 4,
        "middle-right-grass": 5,
        "bottom-left-grass": 6,
        "bottom-middle-grass": 7,
        "bottom-right-grass": 8,
        "left-grass": 9,
        "middle-grass": 10,
        "right-grass": 11,
        "grass-1": 12,
        "grass-2": 13,
        "grass-3": 14,
      },
    });

    // Animations
    k.loadSprite("kirby", kirbySprites, {
      sliceX: 16,
      sliceY: 16,
      anims: {
        idle: { from: 0, to: 9, loop: true, speed: 5 },
        walk: { from: 16, to: 25, loop: true, speed: 16 },
        run: { from: 32, to: 39, loop: true, speed: 20 },
        jump: { from: 48, to: 48, loop: true, speed: 1 },
        fall: { from: 64, to: 65, loop: true, speed: 24 },
        crouched: { from: 80, to: 80, loop: true, speed: 1 },
        "start-absorb": { from: 96, to: 98, loop: false, speed: 12 },
        absorb: { from: 98, to: 100, loop: true, speed: 24 },
        hurt: { from: 112, to: 120, loop: false, speed: 24 },
        dead: { from: 112, to: 112, loop: true, speed: 1 },
        swallow: { from: 128, to: 245, loop: false, speed: 24 },
        sleep: { from: 144, to: 158, loop: false, speed: 5 },
        full: { from: 160, to: 163, loop: true, speed: 24 },
        "full-walk": { from: 176, to: 191, loop: true, speed: 24 },
        "full-jump": { from: 192, to: 192, loop: true, speed: 1 },
        "full-fall": { from: 208, to: 208, loop: true, speed: 1 },
        "full-hurt": { from: 224, to: 227, loop: false, speed: 24 },
        "split-star": { from: 240, to: 244, loop: false, speed: 24 },
      },
    });
    k.loadSprite("fish", fishSprites, {
      sliceX: 8,
      sliceY: 2,
      anims: {
        "swim-up": { from: 0, to: 3, loop: true, speed: 24 },
        "swim-down": { from: 8, to: 15, loop: true, speed: 24 },
      },
    });
    k.loadSprite("bird", birdSprites, {
      sliceX: 8,
      sliceY: 1,
      anims: {
        fly: { from: 0, to: 7, loop: true, speed: 24 },
      },
    });
    k.loadSprite("super", superSprites, {
      sliceX: 7,
      sliceY: 3,
      anims: {
        walk: { from: 0, to: 6, loop: true, speed: 12 },
        fall: { from: 7, to: 8, loop: true, speed: 24 },
        "jump-start": { from: 14, to: 15, loop: false, speed: 12 },
        "jump-end": { from: 16, to: 16, loop: true, speed: 24 },
      },
    });
    k.loadSprite("apple", appleSprites, {
      sliceX: 8,
      sliceY: 1,
      anims: {
        roll: { from: 0, to: 7, loop: true, speed: 24 },
      },
    });
    k.loadSprite("elephant", elephantSprites, {
      sliceX: 8,
      sliceY: 5,
      anims: {
        idle: { from: 0, to: 3, loop: true, speed: 12 },
        roll: { from: 8, to: 15, loop: true, speed: 12 },
        "s-jump": { from: 16, to: 16, loop: true, speed: 1 },
        "e-jump": { from: 17, to: 17, loop: true, speed: 1 },
        fall: { from: 18, to: 18, loop: true, speed: 1 },
        dance: { from: 24, to: 30, loop: true, speed: 12 },
        hurt: { from: 32, to: 33, loop: true, speed: 12 },
        dead: { from: 33, to: 34, loop: false, speed: 1 },
      },
    });
  },

  sounds: () => {
    k.loadSound("confirm-ui", confirmUiSound);
    k.loadSound("button-hovered", buttonHoveredSound);
    k.loadSound("jump", kirbyJumpSound);
    k.loadSound("run", kirbyRunSound);
    k.loadSound("absorb", kirbyAbsorbSound);
    k.loadSound("split-air", kirbySplitAirSound);
    k.loadSound("split-star", kirbySplitStarSound);
    k.loadSound("hurt", kirbyHurtSound);
    k.loadSound("lost-life", kirbyLostLifeSound);
    k.loadSound("game-over", kirbyGameOverSound);
    k.loadSound("enemy-dead", enemyDeadSound);
    k.loadSound("boss-hurt", bossHurtSound);
  },
  
  music: () => {
    k.loadSound("main-menu-music", mainMenuMusic);
    k.loadSound("level-selection-music", levelSelectionMusic);
    k.loadSound("level-1-music", level1Music);
    k.loadSound("level-2-music", level2Music);
    k.loadSound("level-3-music", level3Music);
    k.loadSound("level-4-music", level4Music);
    k.loadSound("winning-music", winningMusic);
  },
};
