(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,u,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=e,this._data=n,this._name=n.name,this._link=n.link,this._handleCardClick=r,this._handleCardDelete=o,this._handleLikeClick=c,this._userId=i,this._cardId=n.cardId,this._ownerId=n.ownerId,this._like=a,this._dislike=u,this._length=length}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLike",value:function(e){e.target.classList.contains("element__like-button_active")?(e.target.classList.remove("element__like-button_active"),this._counter.textContent=this._length-=1,this._dislike(this._cardId)):(e.target.classList.add("element__like-button_active"),this._counter.textContent=this._length+=1,this._like(this._cardId))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(t){e._toggleLike(t)})),this._element.querySelector(".element__photo").addEventListener("click",(function(){e._handleCardClick(e._data)})),this._ownerId===this._userId&&this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleCardDelete(e._data)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__delete-button");this._ownerId===this._userId&&e.classList.add("element_visible"),this._counter=this._element.querySelector(".element__like-counter"),this._counter.textContent=this._length;var t=this._element.querySelector(".element__photo");return this._element.querySelector(".element__title").textContent=this._name,t.alt=this._name,t.src=this._link,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._option=t,this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._option.inputErrorClass),t.classList.add(this._option.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._option.inputErrorClass),t.classList.remove(this._option.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.profileName.textContent,this._personalInfo=t.profilePersonalInfo.textContent}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this.myId=e._id,this._name=e.name,this._personalInfo=e.personalInfo}},{key:"getUserInfo",value:function(){return{name:this._name,personalInfo:this._personalInfo}}},{key:"getId",value:function(){return this._id}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClick=this._handleEscClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClick)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClick)}},{key:"_handleEscClick",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("mousedown",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.close(t.target)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__photo"),t._popupDescription=t._popup.querySelector(".popup__description"),t}return t=a,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupDescription.textContent=e.name,l(h(a.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){var r=t.renderer,o=t.items;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._items=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n))._handleSubmit=r,t._popupFormElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(){e._handleSubmit.bind(e)})),k(E(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupFormElement.reset(),k(E(a.prototype),"close",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),j=[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}];function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){if(e.ok)return e.json()}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){if(e.ok)return e.json()}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){if(e.ok)return e.json()}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=x(e)););return e}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function U(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=x(r);if(o){var n=x(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return U(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupFormElement=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setEventListeners",value:function(){var e=this;q(x(a.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"setFormSubmitHandler",value:function(e){this._handleSubmit=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u),D=document.querySelector(".profile__title"),A=document.querySelector(".profile__subtitle"),V=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__add-button"),N=document.querySelector(".profile__avatar-button"),H=document.querySelector(".popup__input_type_name"),J=document.querySelector(".popup__input_type_personal"),z=document.querySelector(".elements"),M=document.querySelector('input[name="Add-name"]'),G=document.querySelector('input[name="Url"]'),K=document.querySelector(".popup__form_add"),Q=document.querySelector(".popup__form_edit"),W=document.querySelector(".popup__form_avatar"),X=new i({profileName:D,profilePersonalInfo:A}),Y=document.querySelector(".popup__save_edit"),Z=document.querySelector(".popup__save_add"),$=document.querySelector(".popup__save_avatar"),ee=new I({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"01e0e181-05e2-474a-b402-d399393b8015","Content-Type":"application/json"}});function te(e,t){t.textContent=e?"Сохранение..":"Сохранить"}ee.getUserInfo().then((function(e){X.setUserInfo(e)})).catch((function(e){console.log(e)})),ee.getInitialCards().then((function(e){j.renderItems(e)})).catch((function(e){console.log(e)})),V.addEventListener("click",(function(){var e=X.getUserInfo();H.value=e.name,J.value=e.personalInfo,ie.open()}));var ne=new m({items:j,renderer:function(e){var t=re(e).generateCard();ne.addItem(t)}},z);function re(e){var n=new t("#template",e,(function(e){ce.open(e)}),(function(e){ue.setFormSubmitHandler((function(){ee.deleteCards(e._id).then((function(){n.deleteCard(),ue.close(),console.log("карточка удалена")})).catch((function(e){console.log("".concat(e))}))})),ue.open()}));return n}ne.renderItems();var oe=new O({popupSelector:".popup_add",handleSubmit:function(e){te(!0,Z);var t=re(e).generateCard();ne.addItem(t,"prepend"),ee.addCard(item).then((function(e){renderer(e),oe.close(),console.log("uploaded image")})).catch((function(e){console.log(e)})).finally((function(){te(!1,Z)}))}}),ie=new O({popupSelector:".popup_edit",handleSubmit:function(e){te(!0,Y),X.setUserInfo(e),ee.updateUserInfo(item).then((function(e){X.setUserInfo(e),ie.close(),console.log("profile updated")})).catch((function(e){console.log(e)})).finally((function(){te(!1,Y)}))}}),ae=new O({popupSelector:".popup_avatar",handleSubmit:function(e){te(!0,$),X.setUserInfo(e),ee.updateAvatar(item).then((function(e){X.setUserInfo(e),ae.close()})).catch((function(e){console.log(e)})).finally((function(){te(!1,$)}))}}),ue=new B(".popup_delete"),ce=new y(".popup_active");ue.setEventListeners(),ce.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),ae.setEventListeners(),N.addEventListener("click",(function(){return ae.open()})),N.addEventListener("click",(function(){return ae.open()})),F.addEventListener("click",(function(){return oe.open()})),Q.addEventListener("submit",(function(e){e.preventDefault(),D.textContent=H.value,A.textContent=J.value,ie.close()})),K.addEventListener("submit",(function(e){e.preventDefault();var t=re({link:G.value,name:M.value}).generateCard();ne.addItem(t,"prepend"),oe.close(),le.resetValidation()}));var se={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_error-visible"};new r(se,Q).enableValidation();var le=new r(se,K);le.enableValidation(),new r(se,W).enableValidation()})();