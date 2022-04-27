let profileName = document.querySelector('.profile__title');
let profilePersonalInfo = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const editName = document.querySelector('.popup__input_type_name');
const editPersonalInfo = document.querySelector('.popup__input_type_personal');
const saveButton = document.querySelector('.popup__save');

function openPopup() {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editPersonalInfo.value = profilePersonalInfo.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);