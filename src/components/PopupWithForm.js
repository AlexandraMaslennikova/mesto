import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ popupSelector, handleFormSubmit }) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._clickFormSubmit = this._submitClick.bind(this);
    };

    //собираем данные полей формы 
    _getInputValues() {
        const formValues = {};
        const inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
        inputList.forEach(input => formValues[input.name] = input.value);
        return formValues;
    };
    
    _submitClick(event) {
        event.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    };

    close() {
        this._popupFormElement.reset(); //сбрасываем поля формы
        super.close(); //вызываем родительский метод
    };

    setEventListeners() {
        super.setEventListeners();
        this._popupFormElement.addEventListener('submit', this._clickFormSubmit);
    };
}