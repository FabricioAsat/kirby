// Font
import helvetica from "../assets/font/helvetica-rounded-black.otf";

// * Images
import menuBg from "../assets/images/backgrounds/main/menu-bg.jpg";
import menuTitleLogo from "../assets/images/backgrounds/main/title-menu-logo.webp";
import pressEnter from "../assets/images/backgrounds/main/press-enter-to-start.png";

// Sounds
import confirmUiSound from "../assets/sounds/confirm-ui.wav";

// Musics
import mainMenuMusic from "../assets/sounds/main-menu.mp3";

// Context
import { k } from "../main";

export const load = {
  fonts: () => {
    k.loadFont("Helvetica", helvetica);
  },
  assets: () => {
    k.loadSprite("menu-bg", menuBg);
    k.loadSprite("menu-title-logo", menuTitleLogo);
    k.loadSprite("press-enter", pressEnter);
  },

  sounds: () => {
    k.loadSound("confirm-ui", confirmUiSound);
  },

  music: () => {
    k.loadSound("main-menu-music", mainMenuMusic);
  },
};
