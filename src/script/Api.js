export  class Api {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
  
    getInitialCards() {
      return fetch(`${this._baseUrl}/cards`, {
        headers: this._headers,
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      } 
  
    getUserInfo() { //Загрузка информации о пользователе с сервера
      return fetch(`${this._baseUrl}/users/me`, {
        headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      }

      updateUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
          headers: this._headers,
          method: "PATCH",
          body: JSON.stringify({data})
})
    .then(res => {
      if (res.ok) {
      return res.json();
    }
  })
  }; 
    
      addCard(data) { //Добавление новой карточки
        return fetch(`${this._baseUrl}/cards`, {
          method: "POST",
          headers: this._headers,
          body: JSON.stringify({data})
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          })
    }

      deleteCards(cardId) { //Удаление карточки
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
          method: "DELETE",
          headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      }
    
      like(cardId) { //Постановка лайка
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "PUT",
          headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      }

      dislike(cardId) { //Снятие лайка
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
          method: "DELETE",
          headers: this._headers
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      }
    
      updateAvatar(data) { //Обновление аватара пользователя
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({data})
        })
        .then(res => {
            if (res.ok) {
              return res.json();
            }
          });
      }
      _getResponseData(res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      }
  }
