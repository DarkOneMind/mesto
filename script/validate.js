const option = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input_type_error-visible'
};

function showInputError(formElement, inputElement, option) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(option.inputErrorClass);
  errorElement.classList.add(option.errorClass);
  errorElement.textContent = inputElement.validationMessage;
}

// Функция, которая удаляет класс с ошибкой
function hideInputError(formElement, inputElement, option) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(option.inputErrorClass);
  errorElement.classList.remove(option.errorClass);
  errorElement.textContent = '';
}

// Функция, которая проверяет валидность поля
function isValid(formElement, inputElement, option) {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    showInputError(formElement, inputElement, option);
  } else {
    // Если проходит, скроем
    hideInputError(formElement, inputElement, option);
  }
}

function setEventListeners(formElement, option) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(option.inputSelector));
  const buttonElement = formElement.querySelector(option.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, option);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, option);
      toggleButtonState(inputList, buttonElement, option);
    });
  });
}

function enableValidation(option) {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(option.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, option);
  });
}

enableValidation(option);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, option) {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(option.inactiveButtonClass);
    buttonElement.disabled = true;


  } else {
    buttonElement.classList.remove(option.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
