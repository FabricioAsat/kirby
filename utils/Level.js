import { k } from "../main";

export class Level {
  drawMapLayout(levelLayout, mappings, tileWidth = 16, tileHeight = 16, scale = 3) {
    const layerSettings = { tileWidth: tileWidth, tileHeight: tileHeight, tiles: mappings };

    this.map = [];
    for (const layerLayout of levelLayout) {
      this.map.push(k.addLevel(layerLayout, layerSettings));
    }

    for (const layer of this.map) {
      layer.use(k.scale(scale));
    }
  }

  drawBackground(bgSpriteName) {
    k.add([k.sprite(bgSpriteName), k.fixed()]);
  }
}
