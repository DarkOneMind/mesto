import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__photo');
    this._popupDescription = this._popup.querySelector('.popup__description');
  }
  
  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupDescription.textContent = data.name;

    super.open();
  }
}

