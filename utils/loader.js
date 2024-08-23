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

// Sounds
import confirmUiSound from "../assets/sounds/confirm-ui.wav";
import buttonHoveredSound from "../assets/sounds/button-hovered.wav";

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
  },

  sounds: () => {
    k.loadSound("confirm-ui", confirmUiSound);
    k.loadSound("button-hovered", buttonHoveredSound);
  },

  music: () => {
    k.loadSound("main-menu-music", mainMenuMusic);
  },
};
