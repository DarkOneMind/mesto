export class UserInfo {
  constructor(userSelector) {
    this._name = userSelector.profileName;
    this._personalInfo = userSelector.profilePersonalInfo;
    this._userAvatar = userSelector.src;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._personalInfo.textContent = data.about;
    this._userAvatar = data.avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._personalInfo.textContent,
      avatar: this._userAvatar,
    };
    return userInfo;
  }

}