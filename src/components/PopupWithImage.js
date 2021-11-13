import { Popup } from './Popup.js';
 
export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.imageElement = this._popupElement.querySelector('.popup__image');
        this.titleElement = this._popupElement.querySelector('.popup__title');
    }

    open (name, link) {
        this.imageElement.src = link;
        this.imageElement.alt = `Изображение ${name}`;
        this.titleElement.textContent = name;

        super.open();
    }
}