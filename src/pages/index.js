//import '../pages/index.css'; раскоментировать, когда буду билдить

import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { initialCards } from '../scripts/initialCards.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
}; 
const nameEditProfile = document.querySelector('.profile__title'); //поле имени профиля
const jobEditProfile = document.querySelector('.profile__subtitle'); //поле профессии
const addNewCardPopup = document.querySelector('.popup_type_add-card');
const addCardForm = addNewCardPopup.querySelector('.popup__form');
const placeInput = addCardForm.querySelector('.popup__input_type_place');
const linkInput = addCardForm.querySelector('.popup__input_type_link');
const editPopup = document.querySelector('.popup_type_edit-profile');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_job');
const cardList = document.querySelector('.cards'); //карточки 
const popupOpenBtn = document.querySelector('.profile__edit-btn'); //кнопка редактирования профиля
const addCardBtn = document.querySelector('.profile__add-btn'); //кнопка открытия окна добавления карточки
const editProfileForm = editPopup.querySelector('.popup__form');



const handleUserInfoFormSabmit = (data) => {
  UserInfo.setUserInfo(data);
}


const handleCardClick = ({ link, name }) => {
  imagePopup.open({ link, name });
};


const createNewCard = (data) => {
  const card = new Card(data, '.card', handleCardClick);

  return card;
}

const handleCardFormSabmit = (data) => {
  cardList.addItem(createNewCard(data))
};

const userInfo = new UserInfo(nameEditProfile, jobEditProfile);
const imagePopup = new PopupWithImage('.popup_type_image');
const newCardPopup = new PopupWithForm('.popup_type_add-card', handleCardFormSabmit);
const userInfoPopup = new PopupWithForm('.popup_type_edit-profile', handleUserInfoFormSabmit);

editPopup.querySelector('.popup__form').addEventListener('submit', event => {
  event.preventDefault();

  userInfo.setUserInfo(nameInput.value, jobInput.value);
  userInfo.updateUserInfo();

  userInfoPopup.close();
})

userInfo.setUserInfo(nameEditProfile.textContent, jobEditProfile.textContent);

imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
newCardPopup.setEventListeners();

  
popupOpenBtn.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();
  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;

  userInfoPopup.open();
  });
  
addCardBtn.addEventListener('click', () => {
    newCardPopup.open();
    validationNewCard.disabledButton(); //блокируем кнопку
});

const newCardList = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new newCard(item, '.card-template');
    const cardElement = card.createCard();
    newCardList.addItem(cardElement);
  }
}, '.cards'); //проверить
  

//добавление новой карточки
function addCardSubmitHandler(evt) {
    evt.preventDefault(); 
    const card = generateCard({name: placeInput.value, link: linkInput.value}, '.card-template');
    render(card);

    newCardPopup.close();
    evt.currentTarget.reset(); 
  };

//formElementEditProfile.addEventListener('submit', submitProfileForm);
addCardForm.addEventListener('submit', addCardSubmitHandler);


//создаем новые объекты карточек
const generateCard = (data, cardSelector, handleCardClick) => {
    const card = new Card(data, cardSelector, handleCardClick).createCard();
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