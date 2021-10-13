const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editPopup = document.querySelector('.popup_type_edit-profile'); //окно редактирования информации профиля
const newCardPopup = document.querySelector('.popup_type_add-card'); //окно добавления карточки
const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра карточки

const popupOpenBtn = document.querySelector('.profile__edit-btn'); //кнопка редактирования профиля
const addCardBtn = document.querySelector('.profile__add-btn'); //кнопка открытия окна добавления карточки

const popupCloseEdit = editPopup.querySelector('.popup__close_type_edit'); //кнопка закрытия попапа редактирования
const popupCloseCard = document.querySelector('.popup__close_type_card'); //кнопка закрытия попапа добавления карточки
const popupCloseImage = document.querySelector('.popup__close_type_image'); //кнопка закрытия попапа просмотра картинки

const name = document.querySelector('.profile__title'); //поле имени профиля
const job = document.querySelector('.profile__subtitle'); //поле профессии

const popupSubmitBtn = editPopup.querySelector('.popup__submit'); //кнопка сохранения в окне редактирования
const addCardSubmitBtn = newCardPopup.querySelector('.popup__submit');


const imagePopupTitle = imagePopup.querySelector('.popup__title');
const imagePopupImg = imagePopup.querySelector('.popup__image');

const addCardForm = newCardPopup.querySelector('.popup__form');

//функция открытия popup
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
}

popupOpenBtn.addEventListener('click', () => {
  openPopup(editPopup);
  imputText();
});

addCardBtn.addEventListener('click', () => {
  openPopup(newCardPopup);
});

//функция закрытия popup
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
};

popupCloseEdit.addEventListener('click', () => {
  closePopup(editPopup);
});

popupCloseCard.addEventListener('click', () => {
  closePopup(newCardPopup);
});

popupCloseImage.addEventListener('click', () => {
  closePopup(imagePopup);
});

//закрытие popup кликом на 'Escape'
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(editPopup);
    closePopup(newCardPopup);
    closePopup(imagePopup);
  }
}

document.addEventListener('keydown', keyHandler);


//закрытие popup кликом на оверлей
function clickOverlay(event) {
  if (event.target === event.currentTarget) {
    closePopup(editPopup);
    closePopup(newCardPopup);
    closePopup(imagePopup);
  }
};

editPopup.addEventListener('click', clickOverlay);
newCardPopup.addEventListener('click', clickOverlay);
imagePopup.addEventListener('click', clickOverlay);

const formElementEditProfile = document.querySelector('.popup_type_edit-profile');

//form data
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_job');

const placeInput = addCardForm.querySelector('.popup__input_type_place');
const linkInput = addCardForm.querySelector('.popup__input_type_link');

//заполнение полей формы при открытии окна редактирования 
function imputText() {

  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
}

// Обработчик «отправки» формы
function submitProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    //добавляем новые значения
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup(editPopup);
}

// Добавление карточeк
function addCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
  //добавляем новые значения
  renderCard({name: placeInput.value, link: linkInput.value});

  closePopup(newCardPopup);

  evt.currentTarget.reset(); //очищает поля формы после добавления карточки
  addCardSubmitBtn.setAttribute("disabled", "disabled"); //делаем кнопку снова не активной после добавления карточки
}

formElementEditProfile.addEventListener('submit', submitProfileForm);
addCardForm.addEventListener('submit', addCardSubmitHandler);


const cardТеmplate = document.querySelector('.card-template').content.querySelector('.card');
const cardsContainer = document.querySelector('.cards');


//удаление карточки
function handleDeleteClick() {
  e.target.closest(".card").remove();
};

function createCard(data) {
  const cardElement = cardТеmplate.cloneNode(true);

  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeBtn = cardElement.querySelector('.card__like');
  const cardDeleteBtn = cardElement.querySelector('.card__delete');

  // лайк
  cardLikeBtn.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_color_black');
  });


  //удаление карточки
  cardDeleteBtn.addEventListener('click', (evt) => {
    evt.target.closest(".card").remove();
  });

  
  cardTitle.textContent = data.name;
  cardImage.src = data.link;

//просмотр картинки
  cardImage.addEventListener('click', handleImageClick);

  return cardElement;
};

function renderCard(data) {
  cardsContainer.prepend(createCard(data));
};

initialCards.forEach((data) => {
  renderCard(data);
});

//открытие попапа с картинкой
function handleImageClick (evt) {

  imagePopupImg.src = evt.target.getAttribute('src');
  imagePopupTitle.textContent = evt.target.closest('.card').querySelector('.card__title').textContent;
  
  openPopup(imagePopup);
};