class Popup {
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
    }

    open = () => {
        this.popupSelector(true)
    }

    close = () => {
        this.popupSelector(false)
    }

    setEventListeners = () => {
        // logic
    }
    
    
    #_handleEscClose = () => {
        // logic
    }
    
}

export default Popup;