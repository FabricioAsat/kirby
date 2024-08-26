import { k } from "../main";

export class Level {
  drawMapLayout(levelLayout, mappings) {
    const layerSettings = { tileWidth: 16, tileHeight: 16, tiles: mappings };

    this.map = [];
    for (const layerLayout of levelLayout) {
      this.map.push(k.addLevel(layerLayout, layerSettings));
    }

    for (const layer of this.map) {
      layer.use(k.scale(3));
    }
  }

  drawBackground(bgSpriteName) {
    k.add([k.sprite(bgSpriteName), k.fixed()]);
  }
}
