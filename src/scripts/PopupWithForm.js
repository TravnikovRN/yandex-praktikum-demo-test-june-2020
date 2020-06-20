import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this.submitCallback = submitCallback;
  }

  _getInputValues(params) {}

  setEventListeners() {
    this.popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__close")) {
        this.close();
      }
    });
  }

  close() {
    modalWindow.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
}

export default PopupWithForm;
