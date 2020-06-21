class UserInfo {
  constructor({ userNameSelector, userInfoSelector }) { //молодец, использование деструктурзации - хорошая практика
    this.name = userNameSelector;
    this.info = userInfoSelector;
  }

  getUserInfo() {
    return {
      name: this.name.textContent,
      info: this.info.textContent,
    };
  }

  setUserInfo(newName, newInfo) {
    this.name.textContent = newName;
    this.info.textContent = newInfo;
  }
}

export default UserInfo;
// Отлично реализован функционал данного класса
