export class Card {
  constructor(cardSelector, data, handleCardClick, handleCardDelete) {
    this._cardSelector = cardSelector;
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick.handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._cardId = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
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
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', (evt) => {
      this._toggleLike(evt);
    })
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick()
    })
    if (this._ownerId === this._userId) {
      this._element.querySelector('.element__delete-button').addEventListener("click", () => {
          this._handleCardDelete(this._data);
        });
      }
  }

  generateCard() {
    this._element = this._getTemplate();
    const buttonDelete = this._element.querySelector('.element__delete-button');
    if (this._ownerId === this._userId) {
      buttonDelete.classList.add('element_visible');
    }
    const elementPhoto = this._element.querySelector('.element__photo');
    const elementTitle = this._element.querySelector('.element__title');

    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;
    this._setEventListeners();
    return this._element;
  }
}