import Popup from "./Popup";
const imageCaption = imageModalWindow.querySelector('.popup__caption');

class PopupWithImage extends Popup {
    constructor(params) {
        super(params)
    }

    open(img, src, alt) {
        img.src = src;
        img.alt = alt;
        imageCaption.textContent = alt;

        this._popupSelector.classList.add("popup_is-opened");
        document.addEventListener("keyup", this._handleEscClose);
    }
    
}

export default PopupWithImage;