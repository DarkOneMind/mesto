export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClick = this._handleEscClick.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener("keydown", this._handleEscClick);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", this._handleEscClick);
  }

  _handleEscClick(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.querySelector('.popup__close').addEventListener("mousedown", this.close.bind(this));
    this._popup.addEventListener("mousedown", (evt) => {
      if (evt.currentTarget === evt.target) {
        this.close();
      }
    });
  }
}