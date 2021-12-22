export class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = formElement;
        this._inputList = formElement.querySelectorAll(config.inputSelector);
        this._submitButton = formElement.querySelector(config.submitButtonSelector);
    }

    //показываем ошибку
    _showError = (errorElement, inputElement) => {
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

    resetValidation() {
        this._toggleButtonState(); 
        
        this._inputList.forEach((inputElement) => {
          const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
          this._hideError(errorElement, inputElement);
        });
      }

    //активируем и дезактивируем кнопку
    _toggleButtonState = (isActive) => {
        if (isActive) {
            this._submitButton.classList.remove(this._config.inactiveButtonClass);
            this._submitButton.disabled = false;
        } else {
            this.disabledButton();
        }
    };
    //устанавливаем слушателей
    _setEventListeners = () => {
 
        Array.from(this._inputList).forEach(inputElement => {
            inputElement.addEventListener('input', () => {
                const isFormValid = this._formElement.checkValidity(); //проверяем значение на сoответствие ограничениям
                this._checkInputValidity(this._formElement, inputElement);
                this._toggleButtonState(isFormValid);
            })
        })

        this._formElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
    };


    //дезактивируем кнопку
    disabledButton () {
        this._submitButton.classList.add(this._config.inactiveButtonClass)
        this._submitButton.disabled = true;
      }

      
    enableValidation = () => {
        this._setEventListeners();
    };

}