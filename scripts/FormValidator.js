export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = formElement.querySelectorAll(config.inputSelector);
        this._submitButton = formElement.querySelector(config.submitButtonSelector);
    }

    //показываем ошибку
    _showError = (errorElement, inputElement,) => {
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._config.inputErrorClass);
    };

    //скрываем ошибку
    _hideError = (errorElement, inputElement) => {
        errorElement.textContent = '';
        inputElement.classList.remove(this._config.inputErrorClass);
    };

    //проверяем на валидность
    _checkInputValidity = (formElement, inputElement) => {
        const isInputNotValid = !inputElement.validity.valid;
        const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
        if(isInputNotValid) {
            this._showError(errorElement, inputElement);
        } else {
            this._hideError(errorElement, inputElement);
        }
    };

    //активируем и дезактивируем кнопку
    _toggleButtonState = (button, isActive) => {
        if (isActive) {
            button.classList.remove(this._config.inactiveButtonClass);
            button.disabled = false;
        } else {
            button.classList.add(this._config.inactiveButtonClass);
            button.disabled = 'disabled';
        }
    };

    //устанавливаем слушателей
    _setEventListeners = (formElement, config) => {
        const addCardSubmitBtn = document.querySelector('.popup__submit');
    
        Array.from(this._inputList).forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                const isFormValid = formElement.checkValidity(); //проверяем значение на сoответствие ограничениям
                this._checkInputValidity(formElement, inputElement, config);
                this._toggleButtonState(this._submitButton, isFormValid, config);
            })
        })
    
        formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
                //_toggleButtonState(addCardSubmitBtn, false, config);
            })
    };


    //дезактивируем кнопку
    disabledButton () {
        this._submitButton.classList.add(this._config.inactiveButtonClass)
        this._submitButton.disabled = true;
      }

      
    enableValidation = () => {
        this._setEventListeners(this._formElement, this._config);
    };

}