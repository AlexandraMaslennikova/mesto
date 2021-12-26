export class Card {
  constructor( { data, userId, handleCardClick, handleLikeClick, deleteIconClick }, cardSelector) {
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._userId = userId;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
    this.handleLikeClick = handleLikeClick;
    this.deleteIconClick = deleteIconClick;
    
  };
  
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  };

  getIdCard() {
    return this._cardId;
  }

  createCard() { 
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._likeBtn = this._element.querySelector('.card__like');
    this._likesCounter = this._element.querySelector('.card__likesCounter');
    this._deleteBtn = this._element.querySelector('.card__delete');
    
    const cardImage = this._element.querySelector('.card__image');
    
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._likesCounter.textContent = this._likes.length;
 
    this._setEventListeners();
    this._deleteContirm();

    this._userLikes();

    return this._element;
  };

  _userLikes() {
    if (this.isLiked()) {
      this._likeBtn.classList.add('card__like_color_black');
    } else {
      this._likeBtn.classList.remove('card__like_color_black');
    }
  }

  updateLikes(dataLikes) {
    this._likes = dataLikes;
    this._likesCounter.textContent = dataLikes.length;
    this._userLikes();
  }

  isLiked() {
    return this._likes.some(person => person._id === this._userId);
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  };

  _deleteContirm() {
    if (this._userId !== this._ownerId) {
      this._deleteBtn.classList.add('card__delete_type_hidden');
    }
    else {
      this._deleteBtn.classList.remove('card__delete_type_hidden');
    }
  }

  _setEventListeners() {
  
    this._likeBtn.addEventListener('click', () => {
      this.handleLikeClick(this);
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this.deleteIconClick(this);
    });

    this._element.querySelector('.card__image').addEventListener('click', () => { 
      this.handleCardClick({ link: this._link, name: this._name });
    });
  }
}