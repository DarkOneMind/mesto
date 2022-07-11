import { Popup } from './Popup.js';

export class PopupDelete extends Popup {

  constructor(popupSelector) { 
    super(popupSelector); 
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement = this._popup.querySelector('.popup__form');
    this._popupFormElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  setFormSubmitHandler(handle) {
    this._handleSubmit = handle;
  }

}

