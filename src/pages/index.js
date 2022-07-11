import './index.css';
import { Card } from '../script/Card.js';
import { FormValidator } from '../script/FormValidator.js';
import { UserInfo } from '../script/UserInfo.js';
import { PopupWithImage } from '../script/PopupWithImage.js';
import { Section } from '../script/Section.js';
import { PopupWithForm } from '../script/PopupWithForm.js';
import { initialCards } from '../script/initialCards.js';
import {Api} from '../script/Api.js';
import {PopupDelete} from '../script/PopupDelete.js';

const profileName = document.querySelector('.profile__title');
const profilePersonalInfo = document.querySelector('.profile__subtitle');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAvatar = document.querySelector('.profile__avatar-button');
const nameEdit = document.querySelector('.popup__input_type_name');
const personalInfoEdit = document.querySelector('.popup__input_type_personal');
const elements = document.querySelector('.elements');
const nameAdd = document.querySelector('input[name="Add-name"]');
const personalInfoAdd = document.querySelector('input[name="Url"]');
const formAdd = document.querySelector('.popup__form_add');
const formEdit = document.querySelector('.popup__form_edit');
const formAvatar = document.querySelector('.popup__form_avatar');
const userInfo = new UserInfo({ profileName, profilePersonalInfo });
const buttonSaveEdit =  document.querySelector('.popup__save_edit');
const buttonSaveAdd =  document.querySelector('.popup__save_add');
const buttonSaveAvatar =  document.querySelector('.popup__save_avatar');


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '01e0e181-05e2-474a-b402-d399393b8015',
    'Content-Type': 'application/json'
  }
}); 

api
  .getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result);
  })
  .catch((err) => {
    console.log(err);
  });

api
  .getInitialCards()
  .then((result) => {
    initialCards.renderItems(result);
  })
  .catch((err) => {
    console.log(err);
  });

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение..";
  } else {
    button.textContent = "Сохранить";
  }
}

let userId = "";

Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then((result) => {
    const [items, data] = result;
    userId = data._id;
    cards.rendererItems(items.reverse());
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err);
  });

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
    },
    handleCardDelete : (item) => {
      popupDelete.setFormSubmitHandler(() => {
        api
          .deleteCards(item._id)
          .then(() => { 
            card.deleteCard();
            popupDelete.close();
            console.log("card deleted");
          })
          .catch((err) => {
            console.log(`${err}`);
          });
      });
      popupDelete.open();
    }
})
return card
}

const formElementAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmit: (data) => {
    renderLoading(true, buttonSaveAdd);
    const cardElement = createCard(data).generateCard();
    cards.addItem(cardElement, 'prepend');
  }
})

const formElementEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmit: (data) => {
    renderLoading(true, buttonSaveEdit);
    userInfo.setUserInfo(data);
  }
})

const formElementAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleSubmit: (data) => {
    renderLoading(true, buttonSaveAvatar);
    userInfo.setUserInfo(data);
  }
})

const popupDelete = new PopupDelete('.popup_delete');

const withImage = new PopupWithImage('.popup_active');

popupDelete.setEventListeners();
withImage.setEventListeners();
formElementAdd.setEventListeners();
formElementEdit.setEventListeners();
formElementAvatar.setEventListeners();

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

buttonAvatar.addEventListener('click', () => formElementAvatar.open());
buttonAvatar.addEventListener('click', () => formElementAvatar.open());
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
const formValidatorAvatar = new FormValidator(option, formAvatar);
formValidatorAvatar.enableValidation();