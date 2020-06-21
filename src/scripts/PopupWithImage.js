import Popup from "./Popup";

class PopupWithImage extends Popup {
  open(img, src, alt) {
    const imageCaption = this._element.querySelector(".popup__caption");

    img.src = src;
    img.alt = alt;
    imageCaption.textContent = alt;

    super.open();
  }
}

export default PopupWithImage;
// Отлично реализован функционал данного класса
