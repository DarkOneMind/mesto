import { Card } from './Card.js';
import {FormValidator} from './FormValidator.js';

const profileName = document.querySelector('.profile__title');
const profilePersonalInfo = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const closeButtons = document.querySelectorAll('.popup__close');
const formElementEdit = document.querySelector('.form_edit');
const formElementAdd = document.querySelector('.form_add');
const editName = document.querySelector('.form__input_type_name');
const editPersonalInfo = document.querySelector('.form__input_type_personal');
const elements = document.querySelector('.elements');
const nameAdd = document.querySelector('input[name="Add-name"]');
const personalInfoAdd = document.querySelector('input[name="Url"]');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", handleEscClick);
  document.addEventListener("mousedown", handleOverlayClick);
  enableValidation(option);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener("keydown", handleEscClick);
  document.removeEventListener("mousedown", handleOverlayClick);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  closePopup(popupEdit);
}

editButton.addEventListener('click', () => {
  editName.value = profileName.textContent;
  editPersonalInfo.value = profilePersonalInfo.textContent;
  openPopup(popupEdit);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function render(link, name) {
  const outcome = new Card('#template', name, link);
  elements.prepend(outcome.createCard());
}

initialCards.forEach (function (item){
  render(item.link, item.name);
})

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const element = render(personalInfoAdd.value, nameAdd.value);
  elements.append(element);
  formElementAdd.reset();
  closePopup(popupAdd);
}

function handleOverlayClick(evt) {
  const popupOpened = document.querySelector('.popup_opened'); 
  if (evt.target === popupOpened) {
    closePopup(popupOpened);
  }
}

function handleEscClick(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

addButton.addEventListener('click', () => openPopup(popupAdd));
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleFormAddSubmit);

const option = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input_type_error-visible'
};

const enableValidation = (option, popup) => {
  const formValidatorProfile = new FormValidator(option, popup);
  formValidatorProfile.enableValidation();
}

export {openPopup}