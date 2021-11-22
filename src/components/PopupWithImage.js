import { Popup } from './Popup.js';
 
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupElement = document.querySelector(popupSelector);
        this._imageElement = this._popupElement.querySelector('.popup__image');
        this._titleElement = this._popupElement.querySelector('.popup__title');
    }

    open (place, link) {
        super.open();

        this._imageElement.src = link;
        this._imageElement.alt = `Изображение ${place}`;
        this._titleElement.textContent = place;
    }
}