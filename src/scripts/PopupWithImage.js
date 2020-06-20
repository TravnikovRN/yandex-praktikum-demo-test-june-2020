import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(img, src, alt) {

    console.info(this);
    const imageCaption = this.popupSelector.querySelector(".popup__caption");

    img.src = src;
    img.alt = alt;
    imageCaption.textContent = alt;

    this.popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
  }
}

export default PopupWithImage;
