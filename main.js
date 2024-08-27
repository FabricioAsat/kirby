import kaboom from "kaboom";
import { UI } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { Level } from "./utils/Level.js";
import { levelSelectionLayout, levelSelectionStage1Mappings } from "./content/levelSelection/levelSelectionLayout.js";
import { Player } from "./entities/Player.js";
import { Camera } from "./utils/Camera.js";
import { levelSelectConfig } from "./content/levelSelection/config.js";

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
  levelSelection: () => {
    k.setGravity(levelSelectConfig.gravity);
    const levelSelection = new Level();
    levelSelection.drawBackground("level-selection-bg");
    levelSelection.drawMapLayout(levelSelectionLayout, levelSelectionStage1Mappings);

    const kirby = new Player(
      levelSelectConfig.xPos,
      levelSelectConfig.yPos,
      levelSelectConfig.kirbySpeed,
      levelSelectConfig.kirbyJumpForce,
      levelSelectConfig.kirbyLives,
      1,
      false
    );
    kirby.update();
    kirby.enablePassthrough();
    UI.displayHUDKirby(kirby);

    const camera = new Camera();
    camera.attach(kirby, 40, 24);

    kirby.updateHUD(UI.livesCountUI);
  },
  level1: () => {},
  level2: () => {},
};

for (const key in scenes) {
  k.scene(key, scenes[key]);
}

k.go("limbo");

// * Test page

const array = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 14, 14, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8,
  8, 8, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 9, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 9, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  17, 9, 9, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 9, 9, 10, 0, 18,
  14, 14, 14, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 9, 9, 10, 0, 17, 9, 9, 9, 11, 11, 11,
  11, 12, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 9, 9, 10, 0, 17, 9, 9, 9, 4, 12, 12, 12, 5, 19, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 9, 18, 14, 14, 14, 14, 14, 14, 15, 4, 5, 5, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 17, 9, 9, 9, 9, 9, 10, 4, 5, 13, 13, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 13, 13, 13, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 13, 13, 13, 6, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11,
  11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 4, 13, 13, 16, 2, 2, 2, 2, 2, 2, 2, 20, 11, 11, 11, 11, 11, 11, 4, 0, 0, 0, 0, 0, 0, 0, 11, 11, 12, 12,
  12, 12, 12, 11, 11, 11, 11, 11, 11, 11, 2, 2, 2, 2, 20, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 16, 2, 2, 2, 3, 0, 0, 0, 11, 11, 13, 13,
  13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 11, 11, 11, 11, 11, 4, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 0, 0, 0, 11, 11,
  13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 11, 11, 11, 12, 12, 12, 13, 13, 5, 13, 13, 13, 13, 13, 13, 13, 13, 5, 13, 13, 5, 13, 6, 0, 0, 0, 11,
  11, 13, 5, 5, 13, 13, 5, 13, 13, 13, 5, 13, 13, 11, 11, 4, 13, 5, 13, 13, 13, 13, 13, 5, 13, 13, 5, 13, 13, 13, 5, 13, 13, 13, 13, 6, 0, 0, 0, 11,
  11, 13, 13, 13, 13, 13, 5, 13, 5, 13, 13, 5, 13, 11, 11, 4, 13, 5, 13, 13, 5, 13, 13, 13, 5, 13, 13, 5, 13, 13, 13, 5, 13, 5, 13, 6, 0, 0, 0, 11,
  11, 13, 5, 13, 13, 5, 13, 13, 5, 13, 13, 5, 13,
];

function parseSringArray(array, xTiles) {
  let stringArray = [];
  let text = "";

  array.forEach((num, index) => {
    let letterToConcat = "";

    switch (num) {
      case 1:
        letterToConcat = "0";
        break;
      case 2:
        letterToConcat = "1";
        break;
      case 3:
        letterToConcat = "2";
        break;
      case 4:
        letterToConcat = "3";
        break;
      case 5:
        letterToConcat = "4";
        break;
      case 6:
        letterToConcat = "5";
        break;
      case 7:
        letterToConcat = "6";
        break;
      case 8:
        letterToConcat = "7";
        break;
      case 9:
        letterToConcat = "8";
        break;
      case 10:
        letterToConcat = "9";
        break;
      case 11:
        letterToConcat = "a";
        break;
      case 12:
        letterToConcat = "b";
        break;
      case 13:
        letterToConcat = "c";
        break;
      case 14:
        letterToConcat = "d";
        break;
      case 15:
        letterToConcat = "e";
        break;
      case 16:
        letterToConcat = "f";
        break;
      case 17:
        letterToConcat = "g";
        break;
      case 18:
        letterToConcat = "h";
        break;
      case 19:
        letterToConcat = "i";
        break;
      case 20:
        letterToConcat = "j";
        break;
      default:
        letterToConcat = " ";
    }

    text += letterToConcat;
    if ((index + 1) % xTiles === 0 && index >= 39) {
      stringArray.push(text);
      text = "";
    }
  });

  console.log(stringArray);
}

function sliceArray(array, xTiles) {
  let stringArray = [];

  array.forEach((num, index) => {
    stringArray.push(num);
    if ((index + 1) % xTiles === 0 && index >= 39) {
      console.log(stringArray);
      stringArray = [];
    }
  });
}

// parseSringArray(array, 40);
// sliceArray(array, 40);
