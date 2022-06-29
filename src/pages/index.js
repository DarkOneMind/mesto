import './index.css';
import { Card } from '../script/Card.js';
import { FormValidator } from '../script/FormValidator.js';
import { UserInfo } from '../script/UserInfo.js';
import { PopupWithImage } from '../script/PopupWithImage.js';
import { Section } from '../script/Section.js';
import { PopupWithForm } from '../script/PopupWithForm.js';
import { initialCards } from '../script/initialCards.js';

const profileName = document.querySelector('.profile__title');
const profilePersonalInfo = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const editName = document.querySelector('.popup__input_type_name');
const editPersonalInfo = document.querySelector('.popup__input_type_personal');
const elements = document.querySelector('.elements');
const nameAdd = document.querySelector('input[name="Add-name"]');
const personalInfoAdd = document.querySelector('input[name="Url"]');
const addForm = document.querySelector('.popup__form_add');
const editForm = document.querySelector('.popup__form_edit');
const userInfo = new UserInfo({ profileName, profilePersonalInfo });

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  formElementEdit.close();
}

editButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  editName.value = user.name;
  editPersonalInfo.value = user.personalInfo;
  formElementEdit.open();
});

const cards = new Section({
  items: initialCards,
  renderer: (data) => {
    const outcome = createCard(data);
    const cardGenerate = outcome.generateCard();
    cards.addItem(cardGenerate);
  }
},
  elements);

cards.renderItems();

function createCard(data) {
  const card = new Card('#template', data, {
    handleCardClick: () => {
      withImage.open(data);
    }
  });
  return card
}

const formElementAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmit: (data) => {
    const cardElement = createCard(data);
    const cardGenerate = cardElement.generateCard();
    cards.addItem(cardGenerate, 'prepend');
  }
})

const formElementEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmit: (data) => {
    userInfo.setUserInfo(data);
  }
})

const withImage = new PopupWithImage('.popup_active');

withImage.setEventListeners();
formElementAdd.setEventListeners();
formElementEdit.setEventListeners();

function handleFormAddSubmit(evt) {
  evt.preventDefault();

  const outcome = createCard({
    link: personalInfoAdd.value, name: nameAdd.value
  });
  const cardGenerate = outcome.generateCard();
  cards.addItem(cardGenerate, 'prepend');
  formElementAdd.close();
  formValidatorAddProfile.resetValidation();
}

addButton.addEventListener('click', () => formElementAdd.open());
editForm.addEventListener('submit', handleProfileFormSubmit);
addForm.addEventListener('submit', handleFormAddSubmit);

const option = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_error-visible'
};

const formValidatorEditProfile = new FormValidator(option, editForm);
formValidatorEditProfile.enableValidation();
const formValidatorAddProfile = new FormValidator(option, addForm);
formValidatorAddProfile.enableValidation();