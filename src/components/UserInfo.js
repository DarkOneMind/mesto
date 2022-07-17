export class UserInfo {
  constructor(userSelector) {
    this._name = userSelector.profileName;
    this._personalInfo = userSelector.profilePersonalInfo;
    this._userAvatar = userSelector.profileAvatar;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._personalInfo.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      about: this._personalInfo.textContent,
      avatar: this._userAvatar.src,
    };
    return userInfo;
  }

}