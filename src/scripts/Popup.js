import { isEscEvent } from "../utils"; //хорошая практика

class Popup {
  constructor(popupSelector) {
    this._element = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._element.classList.add("popup_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
    this.setEventListeners();
  }

  close() {
    this._element.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  setEventListeners() {
    this._element.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    isEscEvent(evt, () => this.close());
  }
}

export default Popup;

// Отлично реализован функционал данного класса
