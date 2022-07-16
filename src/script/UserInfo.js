export class UserInfo {
  constructor(userSelector) {
    this._name = userSelector.profileName.textContent;
    this._personalInfo = userSelector.profilePersonalInfo.textContent;
    this._userAvatar = userSelector.src;
  }

  setUserInfo(data) {
    this._name = data.name;
    this._personalInfo = data.about;
    this._userAvatar = data.avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name,
      about: this._personalInfo,
      avatar: this._userAvatar,
    };
    return userInfo;
  }
  
}