export class Card {
  constructor( { link, name }, cardSelector, handleCardClick) {
    this._link = link;
    this._name = name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  }

  createCard() { 
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._likeBtn = this._element.querySelector('.card__like');

    const cardImage = this._element.querySelector('.card__image');

    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }

  _addLike() {
    this._likeBtn.classList.toggle('card__like_color_black');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', () => {
      this._addLike();
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => { 
      this._handleCardClick({ link: this._link, name: this._name });
    });
  }
}