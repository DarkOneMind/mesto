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
  }

  _getTemplate() {
    const newPhoto = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true)
    return newPhoto
  }

  _isLiked() {
    if (this._likes.some((like) => like._id === this._userId)) {
      this._likeButton.classList.add('element__like-button_active');
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => { // слушатель на постановку и снятие лайка
      if (this._likeButton.classList.contains('element__like-button_active')) {
        this._handleDeleteLike(this._data);
      } else {
        this._handleLikeClick(this._data);
      }
    })

    this._elementPhoto.addEventListener('click', () => {
      this._handleCardClick(this._data)
    })
    if (this._ownerId === this._userId) {
      this._deleteButton.addEventListener("click", () => {
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

  handleLike(data) {
    this._likes = data.likes;
    this._counter.textContent = this._likes.length;
    this._likeButton.classList.toggle('element__like-button_active');
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector('.element__delete-button');
    if (!this._checkCard()) {
      this._deleteButton.remove();
      this._deleteButton = null
    }

    this._likeButton = this._element.querySelector('.element__like-button');
    this._isLiked();
    this._counter = this._element.querySelector('.element__like-counter');
    this._counter.textContent = this._likes.length;
    this._elementPhoto = this._element.querySelector('.element__photo');
    this._elementTitle = this._element.querySelector('.element__title');

    this._elementTitle.textContent = this._name;
    this._elementPhoto.alt = this._name;
    this._elementPhoto.src = this._link;
    this._setEventListeners();
    return this._element;
  }
}