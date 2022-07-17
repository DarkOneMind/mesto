import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleSubmit }) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._popupFormElement = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popupFormElement.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach(input => inputValues[input.name] = input.value);
    return inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputValues(), this._submitButton);
    }); 
  }

  close() {
    this._popupFormElement.reset();
    super.close();
  }
}