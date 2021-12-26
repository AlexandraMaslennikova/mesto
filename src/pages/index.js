import '../pages/index.css';

import { Api } from '../components/Api.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupConfirm } from '../components/PopupConfirm.js';
import { UserInfo } from '../components/UserInfo.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';

import { 
  validationConfig,
  nameEditProfile,
  jobEditProfile,
  addCardForm,
  nameInput,
  jobInput,
  popupOpenBtn,
  addCardBtn,
  editProfileForm,
  avatarEditProfile,
  editAvatarForm,
  editAvatarBtn,
} from '../utils/constants.js';


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: '9a7c5134-d1e8-4b2f-8e23-3242adc9d84c',
    'content-Type': 'application/json'
  }
}); 

let userId = null;
const userInfo = new UserInfo(nameEditProfile, jobEditProfile, avatarEditProfile);

const cardsList = new Section({
    renderer: (dataCards) => {
      const element = generateCard(dataCards);
      cardsList.addItem(element);
    }
  }, '.cards'); 

  
Promise.all([api.getInitialCards(), api.getUserInformation()])
  .then(([dataCards, dataUser]) => {
    userId = dataUser._id;
    const dataCardsReverse = dataCards.reverse();
    userInfo.setUserInfo(dataUser);
    cardsList.renderItems(dataCardsReverse);
  })
  .catch((error) => {
    console.log('Ошибка получения данных', error);
  });


const handleCardClick = ({name,link}) => {
  imagePopup.open(name, link);
};

const imagePopup = new PopupWithImage('.popup_type_image');

//редактирование информации о профиле
const userInfoPopup = new PopupWithForm (
    { popupSelector:'.popup_type_edit-profile',
    handleFormSubmit: (info) => {
    userInfoPopup.renderLoading(true);
    api.editUserInformation(info.name, info.about) 
      .then((data) => {
        userInfo.setUserInfo(data);
        userInfoPopup.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
      userInfoPopup.renderLoading(false));
     }
});

//редактирование аватара
const userAvatarPopup = new PopupWithForm (
  { popupSelector:'.popup_type_edit-avatar',
    handleFormSubmit: (info) => {
    userAvatarPopup.renderLoading(true);
    api.changeAvatar(info.avatar)
      .then((data) => {
        userInfo.setUserInfo(data);
        userAvatarPopup.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
      userAvatarPopup.renderLoading(false))
     }
});

//валидация
const validationEditProfile = new FormValidator(validationConfig, editProfileForm);
const validationNewCard = new FormValidator(validationConfig, addCardForm);
const validationEditAvatar = new FormValidator(validationConfig, editAvatarForm);

const enableValidation = () => {
    validationEditProfile.enableValidation();
    validationNewCard.enableValidation();
    validationEditAvatar.enableValidation();
};

enableValidation(validationConfig);


popupOpenBtn.addEventListener('click', () => {
  const getUserInfo = userInfo.getUserInfo();

  nameInput.value = getUserInfo.name;
  jobInput.value = getUserInfo.about;

  userInfoPopup.open();

  validationEditProfile.resetValidation(); //очищаем ошибки
});

//создаем карточки
const generateCard = (data) => {
  const card = new Card({
    data: data,
    userId,
    handleCardClick,
    handleLikeClick: (data) => {
      if(card.isLiked()) {
        api.deleteLike(data._cardId)
        .then(dataLikes => {
          card.updateLikes(dataLikes.likes)
        })
        .catch(err => console.log(`Ошибка удаления лайка: ${err}`))
      } else {
        api.putLike(data._cardId)
        .then(dataLikes => {
          card.updateLikes(dataLikes.likes)
        })
        .catch(err => console.log(`Ошибка установки лайка: ${err}`))
      }},
    deleteIconClick: (cardObject) => { 
        popupConfirm.cardObject = cardObject; 
        popupConfirm.open(); 
      }, 
    }, '.card-template');
  const cardElement = card.createCard();
  return cardElement;
};



//попап удаления карточки
const popupConfirm = new PopupConfirm({
  popupSelector: '.popup_type_confirm',
  deleteButtonClick:  () => {
    const cardId = popupConfirm.cardObject._cardId;
    api.deleteCard(cardId)
      .then(() => {
        popupConfirm.cardObject.deleteCard();
        popupConfirm.close();
        popupConfirm.cardObject = '';
      })
      .catch(error => {
        console.log('Удаление карточки. ' + error);
      })
  }
});

//добавление новой карточки
const newCardPopup = new PopupWithForm({
  popupSelector: '.popup_type_add-card',
  handleFormSubmit: (info) => {
    newCardPopup.renderLoading(true);
    api.addNewCard(info.name, info.link)
      .then((data) => {
        const cardElement = generateCard(data);
        cardsList.addItem(cardElement);
        newCardPopup.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() =>
      newCardPopup.renderLoading(false));
  }
});

imagePopup.setEventListeners();
userInfoPopup.setEventListeners();
newCardPopup.setEventListeners();
userAvatarPopup.setEventListeners();
popupConfirm.setEventListeners();



//открытие попапа добавления новой карточки
addCardBtn.addEventListener('click', () => {
  newCardPopup.open();
  validationNewCard.disabledButton(); //блокируем кнопку
  validationNewCard.resetValidation(); //сбрасываем ошибки
});

//открытие попапа редактирования аватара
editAvatarBtn.addEventListener('click', () => {
  userAvatarPopup.open();
  validationEditAvatar.disabledButton();
  validationEditAvatar.resetValidation();
});

