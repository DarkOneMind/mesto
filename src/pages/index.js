import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import Api from '../components/Api.js';
import { PopupDelete } from '../components/PopupDelete.js';
import {
  profileName,
  profilePersonalInfo,
  profileAvatar,
  buttonEdit,
  buttonAdd,
  buttonAvatar,
  nameEdit,
  personalInfoEdit,
  elements,
  formAdd,
  formEdit,
  formAvatar,
  buttonSaveEdit,
  buttonSaveAdd,
  buttonSaveAvatar,
  option,
} from '../utils/constants.js';

const userInfo = new UserInfo({ profileName, profilePersonalInfo, profileAvatar });

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-45',
  headers: {
    authorization: '01e0e181-05e2-474a-b402-d399393b8015',
    'Content-Type': 'application/json'
  }
});

api.getAppData()
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
      .then((data) => {
        card.handleLike(data)
        console.log("Лайк");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function handleDeleteLike() {
    api.dislike(data)
      .then((data) => {
        card.handleLike(data)
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
        userInfo.setUserInfo(data);
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

buttonAvatar.addEventListener('click', () => {
  formElementAvatar.open();
  formValidatorAvatar.resetValidation();
});
buttonAdd.addEventListener('click', () => {
  formElementAdd.open();
  formValidatorAddProfile.resetValidation();
});

buttonEdit.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  nameEdit.value = user.name;
  personalInfoEdit.value = user.about;
  formElementEdit.open();
});

const formValidatorEditProfile = new FormValidator(option, formEdit);
formValidatorEditProfile.enableValidation();
const formValidatorAddProfile = new FormValidator(option, formAdd);
formValidatorAddProfile.enableValidation();
const formValidatorAvatar = new FormValidator(option, formAvatar);
formValidatorAvatar.enableValidation();