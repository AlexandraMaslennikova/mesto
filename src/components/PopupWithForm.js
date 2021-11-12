import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSabmit) {
        super(popupSelector);
        this._popupFormElement = this._popupElement.querySelector('.popup__form');
        this._handleFormSabmit = handleFormSabmit;
    }

    close() {
        this._popupFormElement.reset(); //сбрасываем поля формы
        super.close(); //вызываем родительский метод
    }

    setEventListener() {
        this._popupFormElement.addEventListener('submit', (event) =>{
            this._handleFormSabmit(this._getInputValues());
            this.close();
        })

        super.setEventListeners();
    }

    //собираем данные полей формы 
    _getInputValues() {
        const formValues = {};
        const inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
        inputList.forEach(inputElement => formValues[input.name] = inputValues); //берет name из тега

        return formValues;
    }
}