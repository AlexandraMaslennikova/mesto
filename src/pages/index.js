import '../pages/index.css';

import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';

import { 
  initialCards,
  validationConfig,
  nameEditProfile,
  jobEditProfile,
  addCardForm,
  editPopup,
  nameInput,
  jobInput,
  popupOpenBtn,
  addCardBtn,
  editProfileForm
} from '../utils/constants.js';

const handleUserInfoFormSabmit = (inputValues) => {
  userInfo.setUserInfo(inputValues);
};

const handleCardClick = ({place,link}) => {
  imagePopup.open(place, link);
};

const handleCardFormSabmit = (item) => {
  list.addItem(generateCard(item))
};

const userInfo = new UserInfo(nameEditProfile, jobEditProfile);
const imagePopup = new PopupWithImage('.popup_type_image');
const newCardPopup = new PopupWithForm('.popup_type_add-card', handleCardFormSabmit);
const userInfoPopup = new PopupWithForm('.popup_type_edit-profile', handleUserInfoFormSabmit);


//валидация
const validationEditProfile = new FormValidator(validationConfig, editProfileForm);
const validationNewCard = new FormValidator(validationConfig, addCardForm);

const enableValidation = () => {
    validationEditProfile.enableValidation();
    validationNewCard.enableValidation();
};

enableValidation(validationConfig);

imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
newCardPopup.setEventListeners();

  
popupOpenBtn.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();

  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.job;

  userInfoPopup.open();
});


//открываем попап добавления новой карточки
addCardBtn.addEventListener('click', () => {
    newCardPopup.open();
    validationNewCard.disabledButton(); //блокируем кнопку
});

//создаем карточки
const generateCard = (item) => {
    const card = new Card({
      data: item,
      handleCardClick},
      '.card-template');
    const cardElement = card.createCard();
    return cardElement;
};

//выводим карточки
const list = new Section({
  items: initialCards,
  renderer: (item) => {
    const element = generateCard(item);
    list.addItem(element);
  }
}, '.cards'); 

list.renderItems();
