import { k } from "../main";

class UIManager {
  // Limbo - meramente al pedo
  displayLimbo() {
    k.add([k.setBackground(k.Color.BLACK)]);

    k.add([
      k.text("Press [ Enter ] to insert coin.", {
        size: 20,
        font: "Arial",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y)),
      k.opacity(),
      k.color(k.Color.YELLOW),
    ]);

    k.onKeyPress("enter", () => {
      // this.music = k.play("main-menu-music", { volume: 0.2, loop: true });
      k.play("confirm-ui");
      k.go("main");
    });
  }

  // Hace el menu
  displayMain() {
    k.add([k.sprite("menu-bg")]);
    k.add([k.sprite("menu-title-logo"), k.scale(0.75), k.area(), k.anchor("center"), k.pos(k.center().x, k.center().y - 120)]);
    k.add([k.sprite("press-enter"), k.scale(1.2), k.area(), k.anchor("center"), k.pos(k.center().x, k.center().y + 200)]);

    // Game resolution: 1280x720 pixels
    k.add([
      k.text("Game resolution: 1280x720 pixels", {
        size: 16,
        font: "Arial",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y + 330)),
      k.color(k.Color.BLACK),
    ]);

    // Powered by 💣Kaboom.js - © All rights were not reserved
    k.add([
      k.text("Powered by 💣Kaboom.js - © All rights were not reserved", {
        size: 24,
        font: "Arial",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y + 360)),
      k.color(k.Color.BLACK),
    ]);

    // Events
    k.onKeyPress("enter", () => {
      k.play("confirm-ui");
      k.go("menu");
    });
  }

  // Menu de opciones
  displayMenu() {
    k.add([k.sprite("menu-bg")]);
    k.add([k.sprite("game-select"), k.scale(1.5), k.pos(k.center().x, 50), k.anchor("top")]);

    this.cuteMenuButtons("start-game", k.vec2(k.center().x, k.center().y - 50), "levelSelection");
    this.cuteMenuButtons("view-controls", k.vec2(k.center().x, k.center().y + 75), "controls");
    this.cuteMenuButtons("quit-game", k.vec2(k.center().x, k.center().y + 200), "limbo");
  }

  displayControls() {
    k.add([k.sprite("menu-bg")]);
    k.add([k.sprite("controls"), k.scale(1.5), k.pos(k.center().x, 50), k.anchor("top")]);

    // Left side
    this.cuteControlButton("f-up", k.vec2(150, 300), "up", 400);
    this.cuteControlButton("f-down", k.vec2(150, 400), "down", 400);
    this.cuteControlButton("f-left", k.vec2(150, 500), "left", 400);
    this.cuteControlButton("f-right", k.vec2(150, 600), "right", 400);
    // Right side
    this.cuteControlButton("z-jump", k.vec2(k.center().x + 150, 300), "jump", 400);
    this.cuteControlButton("x-absorb", k.vec2(k.center().x + 150, 400), "absorb", 400);
    this.cuteControlButton("shift-run", k.vec2(k.center().x + 150, 500), "run", 475, 225);
    this.cuteMenuButtons("back-menu", k.vec2(k.center().x, k.center().y * 2 - 50), "menu", 350);
  }

  displayHUDKirby(player) {
    const rectHUD = k.add([
      k.rect(1280, 100),
      k.pos(0, 768 - 50),
      k.anchor("left"),
      k.color(k.Color.fromHex("#000000")),
      k.area(),
      k.opacity(0.25),
      k.fixed(),
    ]);

    this.livesCountUI = rectHUD.add([
      k.text(`${player.numberLives}`, {
        font: "Arial",
        size: 48,
      }),
      k.pos(350, 6),
      k.anchor("left"),
      k.fixed(),
      k.color(k.Color.fromHex("#f7daea")),
    ]);
    rectHUD.add([k.sprite("kirby-lives"), k.pos(250, 0), k.scale(1.5), k.anchor("left"), k.fixed()]);

    this.healthCountUI = {
      0: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 0, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      1: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 1, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      2: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 2, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      3: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 3, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      4: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 4, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      5: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 5, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
      6: rectHUD.add([k.sprite("kirby-health"), k.pos(450 + 35 * 6, 0), k.scale(0.75), k.fixed(), k.anchor("left"), k.fixed()]),
    };
  }

  // ! Helpers
  cuteMenuButtons(sprite, pos, sceneToChange, width = 700) {
    const button = k.add([
      k.rect(width, 75, { radius: 15 }), // Tamaño del botón (ancho, alto)
      k.pos(pos), // Posición en el centro de la pantalla
      k.anchor("center"), // Origen en el centro del botón
      k.area(), // Habilitar la detección de clics
      k.color(k.Color.fromHex("#f7daea")),
      k.outline(4, k.Color.fromHex("#d74894")),
      k.opacity(0.8),
      k.state("normal", ["normal", "hovered"]),
    ]);
    k.add([k.sprite(sprite), k.scale(1), k.pos(button.pos), k.anchor("center")]);

    button.onClick(() => {
      // if (sceneToChange !== "controls" && sceneToChange !== "menu") this.music.stop();
      k.setCursor("default");
      k.play("confirm-ui");
      k.go(sceneToChange);
    });

    button.onHover(() => {
      k.setCursor("pointer");
      button.enterState("hovered");
      k.play("button-hovered");
    });
    button.onHoverEnd(() => {
      k.setCursor("default");
      button.enterState("normal");
    });

    button.onStateEnter("normal", () => {
      button.opacity = 0.8;
      button.radius = 15;
    });
    button.onStateEnter("hovered", async () => {
      button.opacity = 1;
      button.radius = 20;
    });
  }

  cuteControlButton(spriteButton, posButton, spriteName, marginX, width = 75) {
    const button = k.add([
      k.rect(width, 75, { radius: 10 }), // Tamaño del botón (ancho, alto)
      k.pos(posButton), // Posición en el centro de la pantalla
      k.anchor("center"), // Origen en el centro del botón
      k.area(), // Habilitar la detección de clics
      k.color(k.Color.fromHex("#f7daea")),
      k.outline(4, k.Color.fromHex("#d74894")),
    ]);
    k.add([k.sprite(spriteButton), k.scale(0.85), k.pos(button.pos), k.anchor("center")]);

    k.add([k.sprite(spriteName), k.scale(1), k.pos(k.vec2(button.pos.x + marginX, button.pos.y)), k.anchor("center")]);
  }
}

export const UI = new UIManager();
