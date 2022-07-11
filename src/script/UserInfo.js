export class UserInfo {
  constructor(userSelector) {
    this._name = userSelector.profileName.textContent;
    this._personalInfo = userSelector.profilePersonalInfo.textContent;
  }

  setUserInfo(data) {
    this.myId = data._id;
    this._name = data.name;
    this._personalInfo = data.personalInfo;
  }

  getUserInfo() {
    const data = {
      name: this._name,
      personalInfo: this._personalInfo,
    };
    return data;
  }
  getId() {
    return this._id;
  }
}