export class UserInfo {
    constructor(nameElement, jobElement) {
        this._nameElement = nameElement;
        this._jobElement = jobElement;
    };

    setUserInfo = ({ 'name' : name, 'job' : job }) => {
        this._nameElement.textContent = name;
        this._jobElement.textContent = job;
    };

    getUserInfo = () => {
        return {
            name: this._nameElement.textContent,
            job: this._jobElement.textContent,
        }
    };
}