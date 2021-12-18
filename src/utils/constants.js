  export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
  }; 

  export const nameEditProfile = document.querySelector('.profile__title');
  export const jobEditProfile = document.querySelector('.profile__subtitle');
  export const addNewCardPopup = document.querySelector('.popup_type_add-card');
  export const addCardForm = addNewCardPopup.querySelector('.popup__form');
  export const editPopup = document.querySelector('.popup_type_edit-profile');
  export const nameInput = editPopup.querySelector('.popup__input_type_name');
  export const jobInput = editPopup.querySelector('.popup__input_type_job');
  export const cardList = document.querySelector('.cards');
  export const popupOpenBtn = document.querySelector('.profile__edit-btn');
  export const addCardBtn = document.querySelector('.profile__add-btn');
  export const editProfileForm = editPopup.querySelector('.popup__form');
  export const popupAddCard = document.querySelector('.popup_type_add-card');
  
  export const avatarEditProfile = document.querySelector('.profile__avatar');
  export const editAvatarPopup = document.querySelector('.popup_type_edit-avatar');
  export const editAvatarForm = editAvatarPopup.querySelector('.popup__form');
  export const editAvatarBtn = document.querySelector('.profile__avatar-btn');
  