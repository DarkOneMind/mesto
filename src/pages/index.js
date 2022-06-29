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
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const nameEdit = document.querySelector('.popup__input_type_name');
const personalInfoEdit = document.querySelector('.popup__input_type_personal');
const elements = document.querySelector('.elements');
const nameAdd = document.querySelector('input[name="Add-name"]');
const personalInfoAdd = document.querySelector('input[name="Url"]');
const formAdd = document.querySelector('.popup__form_add');
const formEdit = document.querySelector('.popup__form_edit');
const userInfo = new UserInfo({ profileName, profilePersonalInfo });

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profilePersonalInfo.textContent = personalInfoEdit.value;
  formElementEdit.close();
}

buttonEdit.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameEdit.value = user.name;
  personalInfoEdit.value = user.personalInfo;
  formElementEdit.open();
});

const cards = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardSection = createCard(data).generateCard();
    cards.addItem(cardSection);
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
    const cardElement = createCard(data).generateCard();
    cards.addItem(cardElement, 'prepend');
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

buttonAdd.addEventListener('click', () => formElementAdd.open());
formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);

const option = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_error-visible'
};

const formValidatorEditProfile = new FormValidator(option, formEdit);
formValidatorEditProfile.enableValidation();
const formValidatorAddProfile = new FormValidator(option, formAdd);
formValidatorAddProfile.enableValidation();