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
const popupImage = document.querySelector('.popup_active');
const popupPhoto = document.querySelector('.popup__photo');
const popupDescription = document.querySelector('.popup__description');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener("keydown", handleEscClick);
  document.addEventListener("mousedown", handleOverlayClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.addEventListener("keydown", handleEscClick);
  document.addEventListener("mousedown", handleOverlayClick);
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

function createCard(item) {
  const elementTemplate = document.querySelector('#template').content;
  const newPhoto = elementTemplate.querySelector('.element').cloneNode(true);
  const likeButton = newPhoto.querySelector('.element__like-button');
  const deleteButton = newPhoto.querySelector('.element__delete-button');
  const elementPhoto = newPhoto.querySelector('.element__photo');
  const elementTitle = newPhoto.querySelector('.element__title');

  elementTitle.textContent = item.name;
  elementPhoto.alt = item.name;
  elementPhoto.src = item.link;

  function toggleLike() {
    this.classList.toggle('element__like-button_active');
  }

  function deleteCard(evt) {
    evt.target.closest('.element').remove();
  }

  deleteButton.addEventListener('click', deleteCard);
  likeButton.addEventListener('click', toggleLike);

  elementPhoto.addEventListener('click', () => {
    popupPhoto.src = item.link;
    popupPhoto.alt = item.name;
    popupDescription.textContent = item.name;
    openPopup(popupImage);
  });

  return newPhoto;
}

function render() {
  const outcome = initialCards.map(createCard);
  elements.append(...outcome);
}



function handleFormAddSubmit(evt) {
  evt.preventDefault();
  const element = createCard(
    {
      name: nameAdd.value,
      link: personalInfoAdd.value,
    }
  );
  elements.prepend(element);
  closePopup(popupAdd);

}
render();

function handleOverlayClick(evt) {
  if (evt.target.classList.contains("popup")) {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

function handleEscClick(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
  }
}

addButton.addEventListener('click', () => openPopup(popupAdd));
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleFormAddSubmit);
