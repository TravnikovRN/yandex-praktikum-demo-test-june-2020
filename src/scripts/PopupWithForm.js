import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this.submitCallback = submitCallback;
  }

  _getInputValues() {
    return this._inputs.reduce((info, input) => {
      info[input.name] = input.value;
      return info;
    }, {});
  }

  setEventListeners() {
    super.setEventListeners()
    this._inputs = Array.from(this._element.querySelectorAll('.popup__input'))
    this._element.addEventListener('submit', event => {
      event.preventDefault()
      const formInfo = this._getInputValues()
      this._submitCallback(formInfo)
      this.close()
    })
  }

  close() {
    super.close()
    this._clear()
  }

  _clear() {
    this._inputs.forEach(el => {
      el.value = ''
    })
  }
}

export default PopupWithForm;
