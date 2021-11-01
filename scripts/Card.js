import { openPopup } from './index.js';

const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра карточки
const imagePopupImg = imagePopup.querySelector('.popup__image'); //изображение карточки
const imagePopupTitle = imagePopup.querySelector('.popup__title'); //название карточки

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  createCard(data) {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;

    const cardImage = this._element.querySelector('.card__image');

    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', (evt) => 
      {evt.target.classList.toggle('card__like_color_black');
    });

    this._element.querySelector('.card__delete').addEventListener('click', (evt) => 
      {evt.target.closest('.card').remove();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImageClick(this._name, this._link);
      });
  }

  _handleImageClick() {
  
    imagePopupImg.src = this._link;
    imagePopupImg.alt = this._name;
    imagePopupTitle.textContent = this._name;
    
    openPopup(imagePopup);
  }
}