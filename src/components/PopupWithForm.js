import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._inputList = this._popupFormElement.querySelectorAll('.popup__input');
        this._submitButton = this._popupElement.querySelector('.popup__submit');
        this._handleFormSubmit = handleFormSubmit;
        this._clickFormSubmit = this._submitClick.bind(this);
    };

    //собираем данные полей формы 
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => formValues[input.name] = input.value);
        return formValues;
    };
    
    _submitClick(event) {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
    };

    close() {
        this._popupFormElement.reset(); //сбрасываем поля формы
        super.close(); //вызываем родительский метод
    };

    renderLoading (isLoading) {
        if(isLoading) {
            this._submitButton.textContent = 'Сохранение...'
        }
        else {
            this._submitButton.textContent = 'Сохранить'
        }
      };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', this._clickFormSubmit);
    };
}