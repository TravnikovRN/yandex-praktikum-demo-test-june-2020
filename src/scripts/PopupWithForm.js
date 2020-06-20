import Popup from "./Popup";

class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super(popupSelector);
        this.submitCallback = submitCallback;
    }

    _getInputValues(params) {
        
    }
    
    setEventListeners(params) {
        
    }

    close(params) {
        
    }
    
}

export default PopupWithForm;