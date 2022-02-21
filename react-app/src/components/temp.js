//import registerServiceWorker from './registerServiceWorker';


/*class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.user };
        this.onClick = this.onClick.bind(this);
    }
    onClick(e) {
        this.props.onRemove(this.state.data);
    }
    render() {
        return <tr key={this.state.data.id}>
                <td>{this.state.data.id}</td>
                <td>{this.state.data.name}</td>
                <td>{new Date(this.state.data.dateReg).toLocaleDateString()}</td>
                <td>{new Date(this.state.data.dateLast).toLocaleDateString()}</td>
                <td><button onClick={this.onClick}>Change</button>
                    <button onClick={this.onClick}>Delete</button></td>
            </tr>;
    }
}

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", dateReg: "", dateLast: "" };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDateRegChange = this.onDateRegChange.bind(this);
        this.onDateLastChange = this.onDateLastChange.bind(this);
    }
    onNameChange(e) {
        this.setState({ name: e.target.value });
    }
    onDateRegChange(e) {
        this.setState({ dateReg: e.target.value });
    }
    onDateLastChange(e) {
        this.setState({ dateLast: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        var userName = this.state.name.trim();
        var dateReg = this.state.dateReg;
        var dateLast = this.state.dateLast;
        if (!userName || !dateReg || !dateLast) return;
       
        this.props.onUserSubmit({ name: userName, dateReg: dateReg, dateLast: dateLast });
        this.setState({ name: "", dateReg: "", dateLast: "" });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <input type="text"
                        placeholder="User model"
                        value={this.state.name}
                        onChange={this.onNameChange} />
                </p>
                <p>
                    <input type="datetime-local"
                        placeholder="Date Registration"
                        value={this.state.dateReg}
                        onChange={this.onDateRegChange} />
                </p>
                <p>
                    <input type="datetime-local"
                        placeholder="Last Visit Date"
                        value={this.state.dateLast}
                        onChange={this.onDateLastChange} />
                </p>
                <input type="submit" value="Save" />
            </form>
        );
    }
}


class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { users: [] };

        this.onAddUser = this.onAddUser.bind(this);
        this.onRemoveUser = this.onRemoveUser.bind(this);
    }
    // загрузка данных
    loadData() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.apiUrl, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ users: data });
        }.bind(this);
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
    // добавление объекта
    onAddUser(user) {
        if (user) {

            const data = new FormData();
            data.append("name", user.name);
            data.append("dateReg", user.dateReg);
            data.append("dateLast", user.dateLast);
            var xhr = new XMLHttpRequest();

            xhr.open("post", this.props.apiUrl, true);
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send(data);
        }
    }
    // удаление объекта
    onRemoveUser(user) {

        if (user) {
            var url = this.props.apiUrl + "/" + user.id;

            var xhr = new XMLHttpRequest();
            xhr.open("delete", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = function () {
                if (xhr.status === 200) {
                    this.loadData();
                }
            }.bind(this);
            xhr.send();
        }
    }
    render() {

        var remove = this.onRemoveUser;
        return (
            <div>
                <h2>Users list</h2>
                <table className='table table-bordered table-sm table-striped' aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Date Registration</th>
                            <th>Date Last Visit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <User user={user.id} user={user} onRemove={remove} />
                        )}
                    </tbody>
                </table>
                <UserForm onUserSubmit={this.onAddUser} />
            </div>
        );
    }
}*/

//UsersList apiUrl="/api/user" />

//registerServiceWorker();