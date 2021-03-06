export class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    }

    //загрузка начальных карточек
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
          method: "GET",
          headers: this._headers
      })
      .then(this._checkResponse);
    }

    //получение информации о пользователе
    getUserInformation() {
      return fetch(`${this._baseUrl}/users/me`, {
          method: "GET",
          headers: this._headers
      })
      .then(this._checkResponse);
    }
  
    //редактирование информации о пользователе
    editUserInformation(name, about) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(this._checkResponse);
    }

    //добавление карточек
    addNewCard(name, link) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: name,
          link: link
        })
    })
      .then(this._checkResponse);
    }

    //лайк карточки
    putLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers
    })
    .then(this._checkResponse);
    }

    //удаление лайка
    deleteLike(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers
    })
    .then(this._checkResponse);
    }

    //удаление карточек
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers
      })
    .then(this._checkResponse);
    }

    //обновление аватара
    changeAvatar(avatarLink) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: avatarLink
        })
      })
    .then(this._checkResponse);
    }
};
