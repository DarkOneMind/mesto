import { openPopup } from './index.js';

const popupImage = document.querySelector('.popup_active');
const popupPhoto = document.querySelector('.popup__photo');
const popupDescription = document.querySelector('.popup__description');

export class Card {
  constructor(cardSelector, name, link) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
  }

  _getTemplate() {
    const elementTemplate = document.querySelector('#template').content;
    const newPhoto = elementTemplate.querySelector('.element').cloneNode(true);
    return newPhoto
  }

  _toggleLike(evt) {
    evt.target.classList.toggle('element__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector('.element__delete-button').addEventListener('click', () => {
      this._deleteCard();
    })
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    })
  }

  createCard() {
    this._element = this._getTemplate();
    const elementPhoto = this._element.querySelector('.element__photo');
    const elementTitle = this._element.querySelector('.element__title');

    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;

    this._setEventListeners();

    elementPhoto.addEventListener('click', () => {
      popupPhoto.src = this._link;
      popupPhoto.alt = this._name;
      popupDescription.textContent = this._name;
      openPopup(popupImage);
    });

    return this._element;
  }
}