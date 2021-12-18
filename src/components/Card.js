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

    this._setEventListeners();
    this._deleteContirm();

    return this._element;
  };

  _toggleLike() {
    this.handleLikeClick(this._cardId, this.isLiked)
      .then((data) => {
        this._likeBtn.classList.toggle('card__like_color_black');
        this.isLiked = !this.isLiked;
        this._likesCounter.textContent = data.likes.length;
      })
      .catch((error) => {
        console.log('Лайки.' + error);
      })
  }

  userLikes(card) {
    if (this._likes.some(person => person._id === this._userId)) {
      this._likeBtn.classList.add('card__like_color_black');
    }
  }

  updateLikes(card) {
    this._likesCounter.textContent = this._likes.length;
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
      this._toggleLike();
    });

    this._element.querySelector('.card__delete').addEventListener('click', () => {
      this.deleteIconClick(this);
    });

    this._element.querySelector('.card__image').addEventListener('click', () => { 
      this.handleCardClick({ link: this._link, name: this._name });
    });
  }
}