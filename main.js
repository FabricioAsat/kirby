import kaboom from "kaboom"; 
import { UI } from "./utils/UIManager.js";
import { load } from "./utils/loader.js";
import { Level } from "./utils/Level.js";
import { levelSelectionLayout, levelSelectionStage1Mappings } from "./content/levelSelection/levelSelectionLayout.js";
import { Player } from "./entities/Player.js";
import { Camera } from "./utils/Camera.js";
import { levelSelectConfig } from "./content/levelSelection/config.js";
import { level1Layout, level1Mappings } from "./content/levels/1/level1Layout.js";
import { level1Config } from "./content/levels/1/config.js";
import { level2Config } from "./content/levels/2/config.js";
import { level3Config } from "./content/levels/3/config.js";
import { level2Layout, level2Mappings } from "./content/levels/2/level2Layout.js";
import { Fish } from "./entities/Fish.js";
import { E_Super } from "./entities/Super.js";
import { Bird } from "./entities/Bird.js";
import { level3Layout, level3Mappings } from "./content/levels/3/level3Layout.js";
import { level4Layout, level4Mappings } from "./content/levels/4/level4Layout.js";
import { level4Config } from "./content/levels/4/config.js";
import { Elephant } from "./entities/Elephant.js";

// Configuración básica de kaboom
export const k = kaboom({
  height: 768,
  width: 1280,
  letterbox: true,
});

load.assets();
load.sounds();
load.music();

let ambientMusic = k.play("main-menu-music", { volume: 0.2, loop: true });
ambientMusic.stop();

const scenes = {
  limbo: () => {
    ambientMusic.stop();
    UI.displayLimbo();
  },
  main: () => {
    ambientMusic.stop();
    ambientMusic = k.play("main-menu-music", { volume: 0.2, loop: true });
    UI.displayMain();
  },
  menu: () => {
    UI.displayMenu();
  },
  controls: () => {
    UI.displayControls();
  },
  levelSelection: () => {
    ambientMusic.stop();
    ambientMusic = k.play("level-selection-music", { volume: 0.2, loop: true });
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
      "levelSelection",
      false
    );
    kirby.update();
    kirby.enablePassthrough();
    UI.displayHUDKirby(kirby);

    const camera = new Camera();
    camera.attach(kirby, 40, 24);

    kirby.updateHUD(UI);
  },
  level1: () => {
    ambientMusic.stop();
    ambientMusic = k.play("level-1-music", { volume: 0.2, loop: true });
    k.setGravity(level1Config.gravity);
    const level1 = new Level();
    level1.drawBackground("level-1-bg");
    level1.drawMapLayout(level1Layout, level1Mappings, 48, 48, 1);

    const fish = new Fish(
      level1Config.fishPositions.map((fishPos) => fishPos()),
      level1Config.fishAmplitudes
    );
    const eSupers = new E_Super(level1Config.eSuperPositions.map((superPos) => superPos()));
    const birds = new Bird(level1Config.birdsPositions.map((superPos) => superPos()));
    const kirby = new Player(
      level1Config.xPos,
      level1Config.yPos,
      level1Config.kirbySpeed,
      level1Config.kirbyJumpForce,
      level1Config.kirbyLives,
      "level1",
      false
    );

    fish.setMovementPattern();
    eSupers.setMovementPattern();
    birds.setMovementPattern(120);

    kirby.update();
    kirby.enablePassthrough();
    kirby.checkCollisions();

    UI.displayHUDKirby(kirby);

    const camera = new Camera();
    camera.attach(kirby, 118, 24);

    kirby.updateHUD(UI);
  },
  level2: () => {
    ambientMusic.stop();
    ambientMusic = k.play("level-2-music", { volume: 0.2, loop: true });
    k.setGravity(level2Config.gravity);
    const level2 = new Level();
    level2.drawBackground("level-2-bg");
    level2.drawMapLayout(level2Layout, level2Mappings, 48, 48, 1);

    const fish = new Fish(
      level2Config.fishPositions.map((fishPos) => fishPos()),
      level2Config.fishAmplitudes
    );
    const eSupers = new E_Super(level2Config.eSuperPositions.map((superPos) => superPos()));
    const birds = new Bird(level2Config.birdsPositions.map((superPos) => superPos()));
    const kirby = new Player(
      level2Config.xPos,
      level2Config.yPos,
      level2Config.kirbySpeed,
      level2Config.kirbyJumpForce,
      level2Config.kirbyLives,
      "level2",
      false
    );

    fish.setMovementPattern();
    eSupers.setMovementPattern();
    birds.setMovementPattern(151);

    kirby.update();
    kirby.enablePassthrough();
    kirby.checkCollisions();

    UI.displayHUDKirby(kirby);

    const camera = new Camera();
    camera.attach(kirby, 150, 24);

    kirby.updateHUD(UI);
  },
  level3: () => {
    ambientMusic.stop();
    ambientMusic = k.play("level-3-music", { volume: 0.2, loop: true });
    k.setGravity(level3Config.gravity);
    const level2 = new Level();
    level2.drawBackground("level-3-bg");
    level2.drawMapLayout(level3Layout, level3Mappings, 48, 48, 1);

    const fish = new Fish(
      level3Config.fishPositions.map((fishPos) => fishPos()),
      level3Config.fishAmplitudes
    );
    const eSupers = new E_Super(level3Config.eSuperPositions.map((superPos) => superPos()));
    const birds = new Bird(level3Config.birdsPositions.map((superPos) => superPos()));
    const kirby = new Player(
      level3Config.xPos,
      level3Config.yPos,
      level3Config.kirbySpeed,
      level3Config.kirbyJumpForce,
      level3Config.kirbyLives,
      "level3",
      false
    );

    fish.setMovementPattern();
    eSupers.setMovementPattern();
    birds.setMovementPattern(151);

    kirby.update();
    kirby.enablePassthrough();
    kirby.checkCollisions();

    UI.displayHUDKirby(kirby);

    const camera = new Camera();
    camera.attach(kirby, 150, 24);

    kirby.updateHUD(UI);
  },
  level4: () => {
    ambientMusic.stop();
    ambientMusic = k.play("level-4-music", { volume: 0.2, loop: true });
    k.setGravity(level4Config.gravity);
    const level4 = new Level();
    level4.drawBackground("level-4-bg");
    level4.drawMapLayout(level4Layout, level4Mappings, 48, 48, 1);

    const boss = new Elephant(k.vec2(1000, 100));

    const kirby = new Player(
      level4Config.xPos,
      level4Config.yPos,
      level4Config.kirbySpeed,
      level4Config.kirbyJumpForce,
      level4Config.kirbyLives,
      "level4",
      false
    );

    boss.setMovementPattern(kirby, ambientMusic);

    kirby.update();
    kirby.enablePassthrough();
    kirby.checkCollisions(boss);

    UI.displayHUDKirby(kirby);
    UI.displayHUDBoss();

    const camera = new Camera();
    camera.attach(kirby, 28, 24);

    boss.updateHUD(UI);
    kirby.updateHUD(UI);
  },
};

for (const key in scenes) {
  k.scene(key, scenes[key]);
}

k.go("limbo");

// * Test page
const array = []
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

// parseSringArray(array, 150);
