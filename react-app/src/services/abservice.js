//import axios from "axios";

export default class AbService {

    _apiUrl="https://localhost:44302/api"

    getAllPeople = async () => {
        let newData = [];
        await fetch(`${this._apiUrl}/user`)
            .then(response => response.json())
            .then((data) => {
                newData = data
            })
            .catch(() => {
                throw new Error(`Could not fetch /user/`)
            });

        /*if(!res.ok) {

        }*/

        return newData;
    };
};


/*loadData() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", this.props.apiUrl, true);
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        this.setState({ users: data });
    }.bind(this);
    xhr.send();
}*/