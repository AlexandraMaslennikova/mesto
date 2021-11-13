export const initialCards = [
    {
    name: 'Нижний Новгород',
    link: 'https://images.unsplash.com/photo-1629714573535-705128271376?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'
    },
    {
    name: 'Пермский край',
    link: 'https://as2.ftcdn.net/v2/jpg/04/42/67/99/1000_F_442679937_mgT2nvuhl7MCtekrCT6AEgVq1ddOKFMj.jpg'
    },
    {
    name: 'Таганай',
    link: 'https://images.unsplash.com/photo-1521531105925-7c51dffd5098?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80'
    },
    {
      name: 'Воткинск',
      link: 'https://images.unsplash.com/photo-1607699015236-c3b2ab5c27d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80'
    },
    {
      name: 'Качканар',
      link: 'https://as2.ftcdn.net/v2/jpg/04/58/66/67/1000_F_458666798_lkqTp1yDBfxVkRIWXTwZ49Kz6Fq2xuxX.jpg'
    },
    {
      name: 'Москва',
      link: 'https://images.unsplash.com/photo-1547448415-e9f5b28e570d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
    },
  ];

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
  export const placeInput = addCardForm.querySelector('.popup__input_type_place');
  export const linkInput = addCardForm.querySelector('.popup__input_type_link');
  export const editPopup = document.querySelector('.popup_type_edit-profile');
  export const nameInput = editPopup.querySelector('.popup__input_type_name');
  export const jobInput = editPopup.querySelector('.popup__input_type_job');
  export const cardList = document.querySelector('.cards');
  export const popupOpenBtn = document.querySelector('.profile__edit-btn');
  export const addCardBtn = document.querySelector('.profile__add-btn');
  export const editProfileForm = editPopup.querySelector('.popup__form');
  