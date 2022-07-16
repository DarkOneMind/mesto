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
const buttonSaveEdit = document.querySelector('.popup__save_edit');
const buttonSaveAdd = document.querySelector('.popup__save_add');
const buttonSaveAvatar = document.querySelector('.popup__save_avatar');
const option = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input_type_error-visible'
};

export {
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
};