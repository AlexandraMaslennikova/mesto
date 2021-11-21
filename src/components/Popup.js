export class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popupElement.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }
}