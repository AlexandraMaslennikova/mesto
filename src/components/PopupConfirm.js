import { Popup } from '../components/Popup.js';

export class PopupConfirm extends Popup {
  constructor({ popupSelector, deleteButtonClick }) {
    super(popupSelector);
    this._deleteCardButton = this._popupElement.querySelector('.popup__submit_type_confirm');
    this._deleteButtonClick = deleteButtonClick;
  }

  _confirmDelete = () => {
    this._deleteButtonClick();
  }

 setEventListeners() {
    super.setEventListeners();
    this._deleteCardButton.addEventListener('click', this._confirmDelete);
  }
}
