const profileName = document.querySelector('.profile__title');
const profilePersonalInfo = document.querySelector('.profile__subtitle');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const popup = document.querySelector('.popup');
const popupAdd = document.querySelector('.popup_add');
const closeButton = document.querySelector('.popup__close');
const closeButtonAdd = document.querySelector('.popup__close_add');
const formElementEdit = document.querySelector('.popup__form_edit');
const formElementAdd = document.querySelector('.popup__form_add');
const editName = document.querySelector('.popup__input_type_name');
const editPersonalInfo = document.querySelector('.popup__input_type_personal');
const saveButton = document.querySelector('.popup__save');
const saveButtonAdd = document.querySelector('.popup__save_add');
const elements = document.querySelector('.elements');
const nameAdd = document.querySelector('input[name="Add-name"]');
const personalInfoAdd = document.querySelector('input[name="Url-image"]');
const popupImage = document.querySelector('.popup_active');
const popupPhoto = document.querySelector('.popup__photo');
const popupDescription = document.querySelector('.popup__description');
const popupPhotoClose = document.querySelector('.popup__close_image');

editButton.addEventListener('click', () => {
  popup.classList.add('popup_opened');
  editName.value = profileName.textContent;
  editPersonalInfo.value = profilePersonalInfo.textContent;
})

saveButton.addEventListener('click', () =>  {
  popup.classList.remove('popup_opened');
})

closeButton.addEventListener('click', () =>  {
  popup.classList.remove('popup_opened');
})

addButton.addEventListener('click', () => {
  popupAdd.classList.add('popup_opened');
})

closeButtonAdd.addEventListener('click', () => {
  popupAdd.classList.remove('popup_opened');
})

saveButtonAdd.addEventListener('click', () =>  {
  popupAdd.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = editName.value;
  profilePersonalInfo.textContent = editPersonalInfo.value;
}

formElementEdit.addEventListener('submit', formSubmitHandler);

popupPhotoClose.addEventListener('click', () => {
  popupImage.classList.remove('popup_opened');
})

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

function newElement(item) {
  const elementTemplate = document.querySelector('#template').content;
  const newPhoto = elementTemplate.querySelector('.element').cloneNode(true);
  const likeButton = newPhoto.querySelectorAll('.element__like-button');
  const deleteButton = newPhoto.querySelectorAll('.element__delete-button');
  const elementPhoto = newPhoto.querySelector('.element__photo');
  const elementTitle = newPhoto.querySelector('.element__title');

  elementTitle.textContent = item.name;
  elementPhoto.alt = item.name;
  elementPhoto.src = item.link;
  

  function likeActive() {
    this.classList.toggle('element__like-button_active');
  }
  
  likeButton.forEach((button) => {
    button.addEventListener('click', likeActive);
  });
  
  function deleteActive(evt) {
    evt.target.closest('.element').remove();
  }
  
  deleteButton.forEach((button) => {
    button.addEventListener('click', deleteActive);
  });
  
  elementPhoto.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    popupPhoto.src = item.link;
    popupPhoto.alt = item.name;
    popupDescription.textContent = item.name;
  })

  return newPhoto;
}

function render() {
  const outcome = initialCards.map(item => {
    const newPhoto = newElement(item);
    return newPhoto;
  });
  elements.append(...outcome);
}
render();

function formAddSubmitHandler(evt) {
  evt.preventDefault();
  const element = newElement(
    {
    name: nameAdd.value, 
    link: personalInfoAdd.value,
  }
  );
  
  elements.prepend(element);
  formElementAdd.reset();
}

formElementAdd.addEventListener('submit', formAddSubmitHandler);








