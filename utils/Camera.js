import { k } from "../main";

export class Camera {
  attachedObj = null;

  attach(gameObj, offsetX = 0, offsetY = 0, fixedX = null, fixedY = null) {
    this.attachedObj = gameObj;

    if (fixedX && !fixedY) {
      k.onUpdate(() => {
        camPos(fixedX, this.attachedObj.gameObj.pos.y + offsetY);
      });

      return;
    }

    if (!fixedX && fixedY) {
      k.onUpdate(() => {
        camPos(this.attachedObj.gameObj.pos.x + offsetX, fixedY);
      });

      return;
    }

    if (fixedX && fixedY) {
      k.onUpdate(() => {
        camPos(fixedX, fixedY);
      });

      return;
    }

    k.onUpdate(() => {
      camPos(this.attachedObj.gameObj.pos.x + offsetX, this.attachedObj.gameObj.pos.y + offsetY);
    });
  }
}
