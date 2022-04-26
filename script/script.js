let profileName = document.querySelector('.profile__title');
let editButton = document.querySelector('.profile__edit-button');
let profilePersonalInfo = document.querySelector('.profile__subtitle');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let editName = document.querySelector('.popup__input_type_name');
let editPersonalInfo = document.querySelector('.popup__input_type_personal');
let saveButton = document.querySelector('.popup__save');

function openPopup() {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editPersonalInfo.value = profilePersonalInfo.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);