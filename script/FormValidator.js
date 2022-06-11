export class FormValidator {
  constructor(option) {
      this._option = option;
  }



_showInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._option.inputErrorClass);
  errorElement.classList.add(this._option.errorClass);
  errorElement.textContent = inputElement.validationMessage;
}

// Функция, которая удаляет класс с ошибкой
_hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._option.inputErrorClass);
  errorElement.classList.remove(this._option.errorClass);
  errorElement.textContent = '';
}

// Функция, которая проверяет валидность поля
_isValid(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    // Если поле не проходит валидацию, покажем ошибку
    this._showInputError(formElement, inputElement, this._option);
  } else {
    // Если проходит, скроем
    this._hideInputError(formElement, inputElement, this._option);
  }
}

_setEventListeners(formElement) {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(this._option.inputSelector));
  const buttonElement = formElement.querySelector(this._option.submitButtonSelector);
  this._toggleButtonState(inputList, buttonElement, this._option);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      this._isValid(formElement, inputElement, this._option);
      this._toggleButtonState(inputList, buttonElement, this._option);
    });
  });
}

enableValidation() {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(this._option.formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      // У каждой формы отменим стандартное поведение
      evt.preventDefault();
    });

    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    this._setEventListeners(formElement, this._option);
  });
}

_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_toggleButtonState(inputList, buttonElement) {
  // Если есть хотя бы один невалидный инпут
  if (this._hasInvalidInput(inputList)) {
    buttonElement.classList.add(this._option.inactiveButtonClass);
    buttonElement.disabled = true;


  } else {
    buttonElement.classList.remove(this._option.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}
}

