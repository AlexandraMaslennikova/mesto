export class Card {
  constructor( { data, handleCardClick }, cardSelector) {
    this._link = data.link;
    this._place = data.place;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  };

  createCard() { 
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._place;
    this._likeBtn = this._element.querySelector('.card__like');

    const cardImage = this._element.querySelector('.card__image');

    cardImage.src = this._link;
    cardImage.alt = this._place;

    this._setEventListeners();

    return this._element;
  };

  _addLike() {
    this._likeBtn.classList.toggle('card__like_color_black');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._addLike();
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this._deleteCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => { 
      this._handleCardClick({ link: this._link, place: this._place });
    });
  }
}