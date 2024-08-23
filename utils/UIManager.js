import { k } from "../main";

class UIManager {
  // Limbo - meramente al pedo
  displayLimbo() {
    k.add([k.setBackground(k.Color.WHITE)]);

    k.add([
      k.text("Press [ Enter ] to begin", {
        size: 20,
        font: "Helvetica",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y)),
      k.opacity(),
      k.color(k.Color.BLACK),
    ]);

    k.onKeyPress("enter", () => {
      this.music = k.play("main-menu-music", { volume: 0.2, loop: true });
      k.go("main");
    });
  }

  // Hace el menu
  displayMain() {
    k.add([k.sprite("menu-bg")]);
    k.add([
      k.sprite("menu-title-logo"),
      k.scale(0.75),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y - 120),
    ]);
    k.add([
      k.sprite("press-enter"),
      k.scale(1.2),
      k.area(),
      k.anchor("center"),
      k.pos(k.center().x, k.center().y + 200),
    ]);

    // Game resolution: 1280x720 pixels
    k.add([
      k.text("Game resolution: 1280x720 pixels", {
        size: 14,
        font: "Helvetica",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y + 330)),
      k.color(k.Color.BLACK),
    ]);

    // Powered by 💣Kaboom.js - © All rights were not reserved
    k.add([
      k.text("Powered by 💣Kaboom.js - © All rights were not reserved", {
        size: 20,
        font: "Helvetica",
      }),
      k.area(),
      k.anchor("center"),
      k.pos(k.vec2(k.center().x, k.center().y + 360)),
      k.color(k.Color.BLACK),
    ]);

    // Events
    k.onKeyPress("enter", () => {
      this.music.stop();
      k.play("confirm-ui");
      k.go("menu");
    });
  }
}

export const UI = new UIManager();
