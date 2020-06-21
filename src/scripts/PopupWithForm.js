import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this.submitCallback = submitCallback;
    this._submit = this._submit.bind(this);
  }

  _getInputValues() {
    return this._inputs.reduce((info, input) => {
      info[input.name] = input.value;
      return info;
    }, {});
  }

  _submit(event) { 
    event.preventDefault();
    const formInfo = this._getInputValues();
    this.submitCallback(formInfo);
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._inputs = Array.from(this._element.querySelectorAll(".popup__input"));
    this._element.addEventListener("submit", this._submit);
  }

  close() {
    this._element.removeEventListener("submit", this._submit); // Не забываем обнулять листнеры
    super.close();
    this._clear();
  }

  _clear() {
    this._inputs.forEach((el) => {
      el.value = "";
    });
  }
}

export default PopupWithForm;
