import './index.css';
import { Card } from '../script/Card.js';
import { FormValidator } from '../script/FormValidator.js';
import { UserInfo } from '../script/UserInfo.js';
import { PopupWithImage } from '../script/PopupWithImage.js';
import { Section } from '../script/Section.js';
import { PopupWithForm } from '../script/PopupWithForm.js';
import { Api } from '../script/Api.js';
import { PopupDelete } from '../script/PopupDelete.js';

const profileName = document.querySelector('.profile__title');
const profilePersonalInfo = document.querySelector('.profile__subtitle');
const profileAvatar = document.querySelector('.profile__avatar');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAvatar = document.querySelector('.profile__avatar-button');
const nameEdit = document.querySelector('.popup__input_type_name');
const personalInfoEdit = document.querySelector('.popup__input_type_personal');
const elements = document.querySelector('.elements');
const formAdd = document.querySelector('.popup__form_add');
const formEdit = document.querySelector('.popup__form_edit');
const formAvatar = document.querySelector('.popup__form_avatar');
const userInfo = new UserInfo({ profileName, profilePersonalInfo });
const buttonSaveEdit = document.querySelector('.popup__save_edit');
const buttonSaveAdd = document.querySelector('.popup__save_add');
const buttonSaveAvatar = document.querySelector('.popup__save_avatar');


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '01e0e181-05e2-474a-b402-d399393b8015',
    'Content-Type': 'application/json'
  }
});

api.renderCards()
  .then(([user, data]) => {
    userInfo.setUserInfo({ name: user.name, about: user.about, avatar: user.avatar });
    cards.renderItems({ cards: data, userId: user._id })
  })
  .catch(err => console.log(err));

function renderLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = "Сохранить";
  }
}

function renderAddLoading(isLoading, button) {
  if (isLoading) {
    button.textContent = "Создание...";
  } else {
    button.textContent = "создать";
  }
}

const cards = new Section({
  renderer: (data) => {
    cards.addItem(createCard(data.card, data.userId));
  }
},
  elements);


function createCard(data, userId) {
  const card = new Card('#template', data, handleCardClick, handleCardDelete, handleLikeClick, handleDeleteLike, userId)
  return card.generateCard();

  function handleCardClick(data) {
    withImage.open(data);
  }

  function handleCardDelete() {
    popupDelete.open();
    popupDelete.setFormSubmitHandler(() => {
      api.deleteCards(data)
        .then(() => {
          popupDelete.close();
          card.deleteCard();
          console.log("Карточка удалена");
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    });
  }

  function handleLikeClick() {
    api.like(data)
      .then(() => {
        console.log("Лайк");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleDeleteLike() {
    api.dislike(data)
      .then(() => {
        console.log("Дизлайк");
      })
      .catch((err) => {
        console.log(err);
      });
  }

}

const formElementAdd = new PopupWithForm({
  popupSelector: '.popup_add',
  handleSubmit: (data) => {
    renderAddLoading(true, buttonSaveAdd);
    api.addCard(data)
      .then(card => {
        cards.addItem(createCard(card));
        formElementAdd.close();
        console.log("Карточка добавлена");
      })

      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderAddLoading(false, buttonSaveAdd);
      });
  }
})

const formElementEdit = new PopupWithForm({
  popupSelector: '.popup_edit',
  handleSubmit: (data) => {
    renderLoading(true, buttonSaveEdit);
    userInfo.setUserInfo(data);
    api
      .updateUserInfo(data)
      .then((data) => {
        userInfo.setUserInfo(data);
        formElementEdit.close();
        console.log("Профиль изменен");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonSaveEdit);
      });
  }
})

const formElementAvatar = new PopupWithForm({
  popupSelector: '.popup_avatar',
  handleSubmit: (data) => {
    renderLoading(true, buttonSaveAvatar);
    api
      .updateAvatar(data)
      .then((data) => {
        profileAvatar.src = data.avatar;
        formElementAvatar.close();
        console.log("Аватар обновлен");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        renderLoading(false, buttonSaveAvatar);
      });
  }
})

const popupDelete = new PopupDelete('.popup_delete');
const withImage = new PopupWithImage('.popup_active');

popupDelete.setEventListeners();
withImage.setEventListeners();
formElementAdd.setEventListeners();
formElementEdit.setEventListeners();
formElementAvatar.setEventListeners();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameEdit.value;
  profilePersonalInfo.textContent = personalInfoEdit.value;
  formElementEdit.close();
}

function handleFormAddSubmit(evt) {
  evt.preventDefault();
  formElementAdd.close();
  formValidatorAddProfile.resetValidation();
}

function handleFormAvatarSubmit(evt) {
  evt.preventDefault();
  formElementAvatar.close();
  formValidatorAvatar.resetValidation();
}

buttonAvatar.addEventListener('click', () => formElementAvatar.open());
buttonAdd.addEventListener('click', () => formElementAdd.open());
formEdit.addEventListener('submit', handleProfileFormSubmit);
formAdd.addEventListener('submit', handleFormAddSubmit);
formAvatar.addEventListener('submit', handleFormAvatarSubmit);
buttonEdit.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameEdit.value = user.name;
  personalInfoEdit.value = user.about;
  formElementEdit.open();
});

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