export class Card {
  constructor(cardSelector, data, handleCardClick, handleCardDelete, handleLikeClick, handleDeleteLike, userId) {
    this._cardSelector = cardSelector;
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._userId = userId;
    this._handleDeleteLike = handleDeleteLike;
    this._length = length;
  }

  _getTemplate() {
    const newPhoto = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true)
    return newPhoto
  }

  _toggleLike() {
    if (event.target.classList.contains('element__like-button_active')) {
      event.target.classList.remove('element__like-button_active');
      this._counter.textContent = this._likes.length -= 1;
      this._handleDeleteLike(this._data);
    } else {
      event.target.classList.add('element__like-button_active');
      this._counter.textContent = this._likes.length += 1;
      this._handleLikeClick(this._data);
    }
  }

  _isLiked() {
    if (this._likes.some((like) => like._id === this._userId)) {
      this._element.querySelector('.element__like-button').classList.add('element__like-button_active');
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like-button').addEventListener('click', () => {
      this._toggleLike(this._data);
    })
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick(this._data)
    })
    if (this._ownerId === this._userId) {
      this._element.querySelector('.element__delete-button').addEventListener("click", () => {
        this._handleCardDelete(this._data);
      });
    }
  }

  _checkCard() {
    if ((this._userId == this._data.owner._id) || (this._userId == undefined)) {
      return true;
    }
    return false;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector('.element__delete-button');
    if (!this._checkCard()) {
      this._deleteButton.remove();
      this._deleteButton = null
    }
    this._isLiked();
    this._likeButton = this._element.querySelector('.element__like-button');
    this._counter = this._element.querySelector('.element__like-counter');
    this._counter.textContent = this._likes.length;
    const elementPhoto = this._element.querySelector('.element__photo');
    const elementTitle = this._element.querySelector('.element__title');

    elementTitle.textContent = this._name;
    elementPhoto.alt = this._name;
    elementPhoto.src = this._link;
    this._setEventListeners();
    return this._element;
  }
}