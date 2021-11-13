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
  addNewCardPopup,
  addCardForm,
  placeInput,
  linkInput,
  editPopup,
  nameInput,
  jobInput,
  cardList,
  popupOpenBtn,
  addCardBtn,
  editProfileForm
} from '../utils/constants.js';


const handleUserInfoFormSabmit = (data) => {
  UserInfo.setUserInfo(data);
}


const handleCardClick = ({name,link}) => {
  imagePopup.open(name, link);
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
    const card = generateCard({name: placeInput.value, link: linkInput.value}, '.card-template', handleCardClick);
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
    const card = generateCard(data, '.card-template', handleCardClick);
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