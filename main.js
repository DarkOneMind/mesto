(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,u,a,c){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardSelector=e,this._data=n,this._name=n.name,this._link=n.link,this._handleCardClick=r,this._handleCardDelete=o,this._handleLikeClick=c,this._userId=i,this._cardId=n._id,this._ownerId=n.owner._id,this._like=u,this._dislike=a,this._length=length}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_toggleLike",value:function(e){e.target.classList.contains("element__like-button_active")?(e.target.classList.remove("element__like-button_active"),this._counter.textContent=this._length-=1,this._dislike(this._cardId)):(e.target.classList.add("element__like-button_active"),this._counter.textContent=this._length+=1,this._like(this._cardId))}},{key:"isLiked",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this._element.querySelector(".element__like-button").classList.add("element__like-button_active")}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__like-button").addEventListener("click",(function(t){e._toggleLike(t)})),this._element.querySelector(".element__photo").addEventListener("click",(function(){e._handleCardClick(e._data)})),this._ownerId===this._userId&&this._element.querySelector(".element__delete-button").addEventListener("click",(function(){e._handleCardDelete(e._data)}))}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__delete-button");this._ownerId===this._userId&&e.classList.add("element_visible"),isLiked(),this._counter=this._element.querySelector(".element__like-counter"),this._counter.textContent=this._length;var t=this._element.querySelector(".element__photo");return this._element.querySelector(".element__title").textContent=this._name,t.alt=this._name,t.src=this._link,this._setEventListeners(),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._option=t,this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,r;return t=e,(r=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._option.inputErrorClass),t.classList.add(this._option.errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._option.inputErrorClass),t.classList.remove(this._option.errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1)}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.profileName.textContent,this._personalInfo=t.profilePersonalInfo.textContent}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this.myId=e._id,this._name=e.name,this._personalInfo=e.personalInfo}},{key:"getUserInfo",value:function(){return{name:this._name,personalInfo:this._personalInfo}}},{key:"getId",value:function(){return this._id}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClick=this._handleEscClick.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClick)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClick)}},{key:"_handleEscClick",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close").addEventListener("mousedown",this.close.bind(this)),this._popup.addEventListener("mousedown",(function(t){t.currentTarget===t.target&&e.close(t.target)}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__photo"),t._popupDescription=t._popup.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupImage.alt=e.name,this._popupDescription.textContent=e.name,l(h(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer,o=t.items;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._items=o,this._containerSelector=n}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._containerSelector.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleSubmit=r,t._popupFormElement=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._popupFormElement.addEventListener("submit",(function(){e._handleSubmit.bind(e)})),k(E(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._popupFormElement.reset(),k(E(u.prototype),"close",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"updateUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){if(e.ok)return e.json()}))}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){if(e.ok)return e.json()}))}},{key:"deleteCards",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"like",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"dislike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json()}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})}).then((function(e){if(e.ok)return e.json()}))}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupFormElement=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;P(U(u.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"setFormSubmitHandler",value:function(e){this._handleSubmit=e}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a),x=document.querySelector(".profile__title"),D=document.querySelector(".profile__subtitle"),A=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar-button"),N=document.querySelector(".popup__input_type_name"),H=document.querySelector(".popup__input_type_personal"),J=document.querySelector(".elements"),z=document.querySelector('input[name="Add-name"]'),M=document.querySelector('input[name="Url"]'),G=document.querySelector(".popup__form_add"),K=document.querySelector(".popup__form_edit"),Q=document.querySelector(".popup__form_avatar"),W=new i({profileName:x,profilePersonalInfo:D}),X=document.querySelector(".popup__save_edit"),Y=document.querySelector(".popup__save_add"),Z=document.querySelector(".popup__save_avatar"),$=new C({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"01e0e181-05e2-474a-b402-d399393b8015","Content-Type":"application/json"}});function ee(e,t){t.textContent=e?"Сохранение..":"Сохранить"}$.getUserInfo().then((function(e){W.setUserInfo(e)})).catch((function(e){console.log(e)})),$.getInitialCards().then((function(e){te.renderItems(e)})).catch((function(e){console.log(e)})),A.addEventListener("click",(function(){var e=W.getUserInfo();N.value=e.name,H.value=e.personalInfo,oe.open()}));var te=new v({items:[],renderer:function(e){var t=ne(e).generateCard();te.addItem(t)}},J);function ne(e){var n=new t("#template",e,(function(e){ae.open(e)}),(function(e){ue.setFormSubmitHandler((function(){$.deleteCards(e._id).then((function(){n.deleteCard(),ue.close(),console.log("карточка удалена")})).catch((function(e){console.log("".concat(e))}))})),ue.open()}));return n}te.renderItems();var re=new O({popupSelector:".popup_add",handleSubmit:function(e){ee(!0,Y);var t=ne(e).generateCard();te.addItem(t,"prepend"),$.addCard(e).then((function(e){renderer(e),re.close(),console.log("uploaded image")})).catch((function(e){console.log(e)})).finally((function(){ee(!1,Y)}))}}),oe=new O({popupSelector:".popup_edit",handleSubmit:function(e){ee(!0,X),W.setUserInfo(e),$.updateUserInfo(e).then((function(e){W.setUserInfo(e),oe.close(),console.log("profile updated")})).catch((function(e){console.log(e)})).finally((function(){ee(!1,X)}))}}),ie=new O({popupSelector:".popup_avatar",handleSubmit:function(e){ee(!0,Z),W.setUserInfo(e),$.updateAvatar(e).then((function(e){W.setUserInfo(e),ie.close()})).catch((function(e){console.log(e)})).finally((function(){ee(!1,Z)}))}}),ue=new B(".popup_delete"),ae=new _(".popup_active");ue.setEventListeners(),ae.setEventListeners(),re.setEventListeners(),oe.setEventListeners(),ie.setEventListeners(),F.addEventListener("click",(function(){return ie.open()})),F.addEventListener("click",(function(){return ie.open()})),V.addEventListener("click",(function(){return re.open()})),K.addEventListener("submit",(function(e){e.preventDefault(),x.textContent=N.value,D.textContent=H.value,oe.close()})),G.addEventListener("submit",(function(e){e.preventDefault();var t=ne({link:M.value,name:z.value}).generateCard();te.addItem(t,"prepend"),re.close(),se.resetValidation()}));var ce={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save",inactiveButtonClass:"popup__save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_error-visible"};new r(ce,K).enableValidation();var se=new r(ce,G);se.enableValidation(),new r(ce,Q).enableValidation()})();