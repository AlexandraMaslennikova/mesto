export class UserInfo {
    constructor(nameElement, jobElement, avatar) {
        this._nameElement = nameElement;
        this._jobElement = jobElement;
        this._avatar = avatar;
    };

    setUserInfo = (data) => {
        this._nameElement.textContent = data.name;
        this._jobElement.textContent = data.about;
        this._avatar.src = data.avatar;
    };

    getUserInfo = () => {
        return {
            name: this._nameElement.textContent,
            about: this._jobElement.textContent,
            avatar: this._avatar.src
        }
    };
}