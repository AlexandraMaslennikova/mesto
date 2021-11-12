export class UserInfo {
    constructor(nameElement, jobElement) {
        this._nameElement = nameElement;
        this._jobElement = jobElement;
    }

    updateUserInfo = () => {
        this._nameElement.textContent = this._name;
        this._jobElement.textContent = this._job;
    }

    setUserInfo = (newName, newJob) => {
        this._name = newName;
        this._job = newJob;
    }

    getUserInfo = () => {
        return {
            name: this._name,
            job: this._job,
        }
    }
}