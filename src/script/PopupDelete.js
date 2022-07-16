import { Popup } from './Popup.js';

export class PopupDelete extends Popup {

  constructor(popupSelector, handleSubmit) { 
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._popupFormElement = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }

  setFormSubmitHandler(handle) {
    this._handleSubmit = handle;
  }
}

