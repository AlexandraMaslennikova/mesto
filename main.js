(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"getUserInformation",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"editUserInformation",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"cardLike",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("click",(function(t){t.target.classList.contains("popup__close")&&e.close()})),this._popupElement.addEventListener("mousedown",(function(t){t.target.classList.contains("popup")&&e.close()}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}}])&&o(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=f(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},a(e,t,n||e)}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function s(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(r);if(o){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return s(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._popupElement=document.querySelector(e),t._imageElement=t._popupElement.querySelector(".popup__image"),t._titleElement=t._popupElement.querySelector(".popup__title"),t}return t=c,(n=[{key:"open",value:function(e,t){a(f(c.prototype),"open",this).call(this),this._imageElement.src=t,this._imageElement.alt="Изображение ".concat(e),this._titleElement.textContent=e}}])&&u(t.prototype,n),c}(i);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},_(e,t,n||e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function m(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function c(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._popupElement=document.querySelector(n),t._popupFormElement=t._popupElement.querySelector(".popup__form"),t._handleFormSubmit=r,t._clickFormSubmit=t._submitClick.bind(v(t)),t}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return Array.from(this._popupFormElement.querySelectorAll(".popup__input")).forEach((function(t){return e[t.name]=t.value})),e}},{key:"_submitClick",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues()),this.close()}},{key:"close",value:function(){this._popupFormElement.reset(),_(b(c.prototype),"close",this).call(this)}},{key:"setEventListeners",value:function(){_(b(c.prototype),"setEventListeners",this).call(this),this._popupFormElement.addEventListener("submit",this._clickFormSubmit)}}])&&h(t.prototype,n),c}(i);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t,n){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},S(e,t,n||e)}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e){var t,n,r,o,u=e.popupSelector,a=e.deleteButtonClick;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),o=function(){t._deleteButtonClick()},(r="_confirmDelete")in(n=O(t=i.call(this,u)))?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o,t._popupElement=document.querySelector(u),t._deleteCardButton=t._popupElement.querySelector(".popup__submit_type_confirm"),t._deleteButtonClick=a,t}return t=c,(n=[{key:"setEventListeners",value:function(){S(L(c.prototype),"setEventListeners",this).call(this),this._deleteCardButton.addEventListener("click",this._confirmDelete)}},{key:"open",value:function(){this.setEventListeners(),S(L(c.prototype),"open",this).call(this)}}])&&g(t.prototype,n),c}(i);function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),P(this,"_showError",(function(e,t){e.textContent=t.validationMessage,t.classList.add(r._config.inputErrorClass)})),P(this,"_hideError",(function(e,t){e.textContent="",t.classList.remove(r._config.inputErrorClass)})),P(this,"_checkInputValidity",(function(e,t){var n=!t.validity.valid,o=e.querySelector("#".concat(t.id,"-error"));n?r._showError(o,t):r._hideError(o,t)})),P(this,"_toggleButtonState",(function(e,t){t?(e.classList.remove(r._config.inactiveButtonClass),e.disabled=!1):(e.classList.add(r._config.inactiveButtonClass),e.disabled="disabled")})),P(this,"_setEventListeners",(function(e){Array.from(r._inputList).forEach((function(t){t.addEventListener("input",(function(){var n=r._formElement.checkValidity();r._checkInputValidity(r._formElement,t,e),r._toggleButtonState(r._submitButton,n,e)}))})),r._formElement.addEventListener("submit",(function(e){e.preventDefault()}))})),P(this,"enableValidation",(function(){r._setEventListeners()})),this._config=t,this._formElement=n,this._inputList=n.querySelectorAll(t.inputSelector),this._submitButton=n.querySelector(t.submitButtonSelector)}var t,n;return t=e,(n=[{key:"disabledButton",value:function(){this._submitButton.classList.add(this._config.inactiveButtonClass),this._submitButton.disabled=!0}}])&&q(t.prototype,n),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t,n){var r=t.data,o=t.userId,i=t.handleCardClick,c=t.handleLikeClick,u=t.deleteIconClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._link=r.link,this._name=r.name,this._likes=r.likes,this._userId=o,this._cardId=r._id,this._ownerId=r.owner._id,this._cardSelector=n,this.handleCardClick=i,this.handleLikeClick=c,this.deleteIconClick=u}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"getIdCard",value:function(){return this._cardId}},{key:"createCard",value:function(){this._element=this._getTemplate(),this._element.querySelector(".card__title").textContent=this._name,this._likeBtn=this._element.querySelector(".card__like"),this._likesCounter=this._element.querySelector(".card__likesCounter"),this._deleteBtn=this._element.querySelector(".card__delete");var e=this._element.querySelector(".card__image");return e.src=this._link,e.alt=this._name,this._setEventListeners(),this._deleteContirm(),this._element}},{key:"_toggleLike",value:function(){var e=this;this.handleLikeClick(this._cardId,this.isLiked).then((function(t){e._likeBtn.classList.toggle("card__like_color_black"),e.isLiked=!e.isLiked,e._likesCounter.textContent=t.likes.length})).catch((function(e){console.log("Лайки."+e)}))}},{key:"userLikes",value:function(e){var t=this;this._likes.some((function(e){return e._id===t._userId}))&&this._likeBtn.classList.add("card__like_color_black")}},{key:"updateLikes",value:function(e){this._likesCounter.textContent=this._likes.length}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_deleteContirm",value:function(){this._userId!==this._ownerId?this._deleteBtn.classList.add("card__delete_type_hidden"):this._deleteBtn.classList.remove("card__delete_type_hidden")}},{key:"_setEventListeners",value:function(){var e=this;this._likeBtn.addEventListener("click",(function(){e._toggleLike()})),this._element.querySelector(".card__delete").addEventListener("click",(function(){e.deleteIconClick(e)})),this._element.querySelector(".card__image").addEventListener("click",(function(){e.handleCardClick({link:e._link,name:e._name})}))}}])&&B(t.prototype,n),e}(),U={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error"},x=document.querySelector(".profile__title"),A=document.querySelector(".profile__subtitle"),D=document.querySelector(".popup_type_add-card").querySelector(".popup__form"),F=document.querySelector(".popup_type_edit-profile"),V=F.querySelector(".popup__input_type_name"),N=F.querySelector(".popup__input_type_job"),J=(document.querySelector(".cards"),document.querySelector(".profile__edit-btn")),G=document.querySelector(".profile__add-btn"),H=F.querySelector(".popup__form"),M=document.querySelector(".popup_type_add-card"),z=document.querySelector(".profile__avatar"),$=document.querySelector(".popup_type_edit-avatar"),K=$.querySelector(".popup__form"),Q=document.querySelector(".profile__avatar-btn");function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new t({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-32",headers:{authorization:"9a7c5134-d1e8-4b2f-8e23-3242adc9d84c","content-Type":"application/json"}}),Y=null,Z=new function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,"setUserInfo",(function(e){o._nameElement.textContent=e.name,o._jobElement.textContent=e.about,o._avatar.src=e.avatar})),I(this,"getUserInfo",(function(){return{name:o._nameElement.textContent,about:o._jobElement.textContent,avatar:o._avatar.src}})),this._nameElement=t,this._jobElement=n,this._avatar=r}(x,A,z),ee=new r({renderer:function(e){var t=le(e);ee.addItem(t)}},".cards");Promise.all([X.getInitialCards(),X.getUserInformation()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,u=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Y=i._id;var c=o.reverse();Z.setUserInfo(i),ee.renderItems(c)})).catch((function(e){console.log("Ошибка получения данных",e)}));var te=function(e){var t=e.name,n=e.link;ne.open(t,n)},ne=new p(".popup_type_image"),re=new k({popupSelector:".popup_type_edit-profile",handleFormSubmit:function(e){ae(F,!0),X.editUserInformation(e.name,e.about).then((function(e){Z.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){return ae(F,!1)}))}}),oe=new k({popupSelector:".popup_type_edit-avatar",handleFormSubmit:function(e){ae($,!0),X.changeAvatar(e.avatar).then((function(e){Z.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){return ae($,!1)}))}}),ie=new R(U,H),ce=new R(U,D),ue=new R(U,K);function ae(e,t){e.querySelector(".popup__submit").textContent=t?"Сохранение...":"Сохранить"}ie.enableValidation(),ce.enableValidation(),ue.enableValidation(),J.addEventListener("click",(function(){var e=Z.getUserInfo();V.value=e.name,N.value=e.about,re.open()}));var le=function(e){var t=new T({data:e,userId:Y,handleCardClick:te,handleLikeClick:function(e,t){return X.cardLike(e,t)},deleteIconClick:function(e){se.cardObject=e,se.open()}},".card-template"),n=t.createCard();return t.userLikes(n),t.updateLikes(n),n},se=new j({popupSelector:".popup_type_confirm",deleteButtonClick:function(){var e=se.cardObject._cardId;X.deleteCard(e).then((function(){se.cardObject.deleteCard(),se.close(),se.cardObject="",console.log(e)})).catch((function(e){console.log("Удаление карточки. "+e)}))}}),fe=new k({popupSelector:".popup_type_add-card",handleFormSubmit:function(e){ae(M,!0),X.addNewCard(e.name,e.link).then((function(e){var t=le(e);ee.addItem(t)})).catch((function(e){console.log(e)})).finally((function(){return ae(M,!1)}))}});ne.setEventListeners(),re.setEventListeners(),fe.setEventListeners(),oe.setEventListeners(),se.setEventListeners(),G.addEventListener("click",(function(){fe.open(),ce.disabledButton()})),Q.addEventListener("click",(function(){oe.open(),ce.disabledButton()}))})();