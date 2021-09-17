const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = popup.querySelector('.popup__close');
const body = document.querySelector('.body');
const name = document.querySelector('.profile__title');
const job = document.querySelector('.profile__subtitle');
const popupSubmitBtn = popup.querySelector('.popup__submit');

//функция открытия окна редактирования
function openPopup() {
    popup.classList.add('popup_opened');
}

//функция закрытия окна редактирования
function closePopup() {
    popup.classList.remove('popup_opened');
}

popupCloseBtn.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_rob');

//заполнение полей формы при открытии окна редактирования 
function imputText() {

    nameInput.value = name.textContent;
    jobInput.value = job.textContent;

    openPopup();
}

popupOpenBtn.addEventListener('click', imputText);

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    //добавляем новые значения
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

    closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 