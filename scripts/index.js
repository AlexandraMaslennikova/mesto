import { initialCards } from './initialCards.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { openPopup, closePopup, clickOverlay } from './utils.js';

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
}; 

const cardList = document.querySelector('.cards'); //карточки
const popups = document.querySelectorAll('.popup'); //попапы
  
const editPopup = document.querySelector('.popup_type_edit-profile'); //окно редактирования информации профиля
const newCardPopup = document.querySelector('.popup_type_add-card'); //окно добавления карточки
const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра картинки

 
const popupOpenBtn = document.querySelector('.profile__edit-btn'); //кнопка редактирования профиля
const addCardBtn = document.querySelector('.profile__add-btn'); //кнопка открытия окна добавления карточки
  
const name = document.querySelector('.profile__title'); //поле имени профиля
const job = document.querySelector('.profile__subtitle'); //поле профессии

//формы
const addCardForm = newCardPopup.querySelector('.popup__form');
const editProfileForm = editPopup.querySelector('.popup__form');

  

  
popupOpenBtn.addEventListener('click', () => {
    openPopup(editPopup);
    imputText();
  });
  
addCardBtn.addEventListener('click', () => {
    openPopup(newCardPopup);
    validationNewCard.disabledButton(); //блокируем кнопку
});
  
popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
    })
});
  
editPopup.addEventListener('mousedown', clickOverlay);
newCardPopup.addEventListener('mousedown', clickOverlay);
imagePopup.addEventListener('mousedown', clickOverlay);

const formElementEditProfile = document.querySelector('.popup_type_edit-profile');

const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_job');
  
const placeInput = addCardForm.querySelector('.popup__input_type_place');
const linkInput = addCardForm.querySelector('.popup__input_type_link');
  
//заполнение полей формы при открытии окна редактирования 
function imputText() {
    nameInput.value = name.textContent;
    jobInput.value = job.textContent;
};

//добавление новой карточки
function addCardSubmitHandler(evt) {
    evt.preventDefault(); 
    //создаем переменную и добавляем туда новые значения
    const card = generateCard({name: placeInput.value, link: linkInput.value}, '.card-template');
    //отображаем карточку
    render(card);
    //закрываем попап
    closePopup(newCardPopup);
    //очищаем поля формы после добавления карточки
    evt.currentTarget.reset(); 
  };

formElementEditProfile.addEventListener('submit', submitProfileForm);
addCardForm.addEventListener('submit', addCardSubmitHandler);

  // Обработчик «отправки» формы
function submitProfileForm (evt) {
    evt.preventDefault();
      
    //добавляем новые значения
    name.textContent = nameInput.value;
    job.textContent = jobInput.value;
  
    closePopup(editPopup);
};

//создаем новые объекты карточек
const generateCard = (data, cardSelector) => {
    const card = new Card(data, cardSelector).createCard();
    return card;
}

//отображаем карточки
const render = (data) => {
    cardList.prepend(data);
}

initialCards.forEach((data) => {
    const card = generateCard(data, '.card-template');
    render(card);
});

//создаем новые объекты для валидации
const validationEditProfile = new FormValidator(validationConfig, editProfileForm);
const validationNewCard = new FormValidator(validationConfig, addCardForm);

const enableValidation = () => {
    validationEditProfile.enableValidation();
    validationNewCard.enableValidation();
}

enableValidation(validationConfig);