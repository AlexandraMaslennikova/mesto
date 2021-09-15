const popup = document.querySelector('.popup');
const popupOpenBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = popup.querySelector('.popup__close');
const body = document.querySelector('.body');

//функция открытия окна редактирования
function openPopup() {
    popup.classList.add('popup_opened');
    body.classList.add('body_no-scroll');
}

//функция закрытия окна редактирования
function closePopup() {
    popup.classList.remove('popup_opened');
    body.classList.remove('body_no-scroll');
}

popupOpenBtn.addEventListener('click', openPopup);
popupCloseBtn.addEventListener('click', closePopup);

// Редактирование имени и информации о себе
let formElement = document.querySelector('.popup');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_rob');

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    //находим старые значения
    const name = document.querySelector('.profile__title');
    const job = document.querySelector('.profile__subtitle');

    //вставляем новые значения
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;

}

formElement.addEventListener('submit', formSubmitHandler); 


//закрываем форму при нажатии на кнопку сохранить 
const popupSubmitBtn = popup.querySelector('.popup__submit');

function closePopupSubmit() {
    popup.classList.remove('popup_opened');
}

popupSubmitBtn.addEventListener('click', closePopupSubmit);

//заполнение полей формы при открытии окна редактирования 
function imputText() {
    const name = document.querySelector('.profile__title');
    const job = document.querySelector('.profile__subtitle');

    if (popup.classList.contains('popup_opened')) {
        nameInput.value = name.textContent;
        jobInput.value = job.textContent;
    }
}

popupOpenBtn.addEventListener('click', imputText);