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

const popups = document.querySelectorAll('.popup');

const editPopup = document.querySelector('.popup_type_edit-profile'); //окно редактирования информации профиля
const newCardPopup = document.querySelector('.popup_type_add-card'); //окно добавления карточки
const imagePopup = document.querySelector('.popup_type_image'); //окно просмотра карточки

const popupOpenBtn = document.querySelector('.profile__edit-btn'); //кнопка редактирования профиля
const addCardBtn = document.querySelector('.profile__add-btn'); //кнопка открытия окна добавления карточки

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

  document.addEventListener('keydown', keyHandler); //добавляем слушатель при открытии попапа
};

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

  popup.removeEventListener('keydown', keyHandler); //удаляем слушатель при зактырии попапа
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
});

//закрытие popup кликом на 'Escape'
function keyHandler(evt) {
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(openedPopup);
  }
};

//закрытие popup кликом на оверлей
function clickOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
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
};

// Обработчик «отправки» формы
function submitProfileForm (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    //добавляем новые значения
  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup(editPopup);
};

// Добавление карточeк
function addCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
  //добавляем новые значения
  renderCard({name: placeInput.value, link: linkInput.value});

  closePopup(newCardPopup);

  evt.currentTarget.reset(); //очищает поля формы после добавления карточки
};

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
  cardImage.alt = data.name;

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

  imagePopupImg.src = evt.target.src
  imagePopupImg.alt = evt.target.alt
  imagePopupTitle.textContent = evt.target.alt
  
  openPopup(imagePopup);
};