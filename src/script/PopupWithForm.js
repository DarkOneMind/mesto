import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._popupFormElement = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputValues = {};
    const inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
    inputList.forEach(input => inputValues[input.name] = input.value);

    return inputValues;
  }

  setEventListeners() {
    this._popupFormElement.addEventListener('submit', () => {
      this._handleSubmit(this._getInputValues(), this._submitButton);
    });
    super.setEventListeners();
  }

  close() {
    this._popupFormElement.reset();
    super.close();
  }
}