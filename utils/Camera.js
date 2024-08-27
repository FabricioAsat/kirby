import { k } from "../main";

export class Camera {
  attachedObj = null;
  widthScreen = 1280;
  heightScreen = 768;

  attach(gameObj, maxTilesX, maxTilesY) {
    this.attachedObj = gameObj;
    const cameraOffsetX = this.widthScreen + (maxTilesX - 25) * (16 * 3);
    const cameraOffsetY = this.heightScreen + (maxTilesY - 16) * (16 * 3);

    k.onUpdate(() => {
      const clampedX = k.clamp(this.attachedObj.gameObj.pos.x, k.width() / 2, cameraOffsetX - k.width() / 2);
      const clampedY = k.clamp(this.attachedObj.gameObj.pos.y, k.height() / 2, cameraOffsetY - k.height() / 2);
      camPos(clampedX, clampedY);
    });
  }
}

// k.camPos(this.attachedObj.gameObj.pos.x + offsetX, this.attachedObj.gameObj.pos.y + offsetY);
