import Popup from "./Popup";

class PopupWithImage extends Popup {
    constructor(popupSelector, img, src, alt)  {
        super(popupSelector);
        this.img = img;
        this.src = src;
        this.alt = alt;
    }

    open() {

        const imageCaption = this._popupSelector.querySelector('.popup__caption');

        this.img.src = this.src;
        this.img.alt = this.alt;
        imageCaption.textContent = this.alt;

        this._popupSelector.classList.add("popup_is-opened");
        document.addEventListener("keyup", this._handleEscClose);
    }
    
}

export default PopupWithImage;