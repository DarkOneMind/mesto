import { handleCardClick } from './index.js';

export class Card {
  constructor(cardSelector, name, link, handleCardClick) {
    this._cardSelector = cardSelector;
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const newPhoto = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true)
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
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      handleCardClick(this._name, this._link)
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    const elementPhoto = this._element.querySelector('.element__photo');
    const elementTitle = this._element.querySelector('.element__title');

    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;
    this._setEventListeners();
    return this._element;
  }
}