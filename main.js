import kaboom from "kaboom";
import { UI } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";

// Configuración básica de kaboom
export const k = kaboom({
  height: 768,
  width: 1280,
  letterbox: true,
});

load.assets();
load.sounds();
load.music();

const scenes = {
  limbo: () => {
    UI.displayLimbo();
  },
  main: () => {
    UI.displayMain();
  },
  menu: () => {
    UI.displayMenu();
  },
  controls: () => {
    UI.displayControls();
  },
  levelSelection: () => {},
  level1: () => {},
  level2: () => {},
};

for (const key in scenes) {
  k.scene(key, scenes[key]);
}

k.go("limbo");
