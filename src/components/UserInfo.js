export class UserInfo {
    constructor(nameElement, jobElement, avatar, _id) {
        this._nameElement = nameElement;
        this._jobElement = jobElement;
        this._avatar = avatar;
        this._id = _id
    };

    setUserInfo = ({ name, about, avatar, _id }) => {
        this._nameElement.textContent = name;
        this._jobElement.textContent = about;
        this._avatar.src = avatar;
        this._id = _id;

    };

    getUserInfo = () => {
        return {
            name: this._nameElement.textContent,
            about: this._jobElement.textContent,
            avatar: this._avatar.src,
            userId: this._id
        }
    };
}