import { isEscEvent } from '../utils';

class Popup {
  constructor(popupSelector) {
    this.popupSelector = popupSelector;
  }

  open() {
    this.popupSelector.classList.add("popup_is-opened");
    document.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    modalWindow.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  setEventListeners() {
    this.popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    isEscEvent(evt, this.close);
  }
}

export default Popup;
