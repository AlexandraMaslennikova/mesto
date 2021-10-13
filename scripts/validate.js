const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
}; 

// функция показывает ошибку
const showError = (errorElement, inputElement, config) => {
    errorElement.textContent = inputElement.validationMessage;
    inputElement.classList.add(config.inputErrorClass);
}

//функция скрывает ошибку
const hideError = (errorElement, inputElement, config) => {
    errorElement.textContent = '';
    inputElement.classList.remove(config.inputErrorClass);
}

//проверяет на валидность
const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if(isInputNotValid) {
        showError(errorElement, inputElement, config);
    } else {
        hideError(errorElement, inputElement, config);
    }
}

const toggleButtonState = (button, isActive, config) => {
    if (isActive) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    }
}

//добавляет слушатели
const setEventListeners = (formElement, config) => {
    const inputsList = formElement.querySelectorAll(config.inputSelector);
    const submitButton = formElement.querySelector(config.submitButtonSelector);

    toggleButtonState(addCardSubmitBtn, false, config); //делаем кнопку добавления карточки неактивной при открытии попапа

    Array.from(inputsList).forEach(inputElement => {
        inputElement.addEventListener('input', (evt) => {
            const isFormValid = formElement.checkValidity(); //проверяем значение на ссответствие ограничениям
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(submitButton, isFormValid, config);
        })
    })

    formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
}

const enableValidation = (config) => {
    const forms = document.querySelectorAll(config.formSelector);
    Array.from(forms).forEach(formElement => {
        setEventListeners(formElement, config);
    })
}

enableValidation(validationConfig);