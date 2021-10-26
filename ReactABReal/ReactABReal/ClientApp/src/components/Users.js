import React, { Component } from 'react';


class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: props.user };
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onRemove(this.state.data);
    }

    render() {
        return <div>
            <p><b>{this.state.data.user}</b></p>
            <p>Дата Регистрации: {this.state.data.dateReg}</p>
            <p>Дата Посещения: {this.state.data.dateLast}</p>
            <p><button onClick={this.onClick}>Удалить</button></p>
        </div>;
    }
}

class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { name: "", dtReg: "2001/01/01 00:00", dtLast: "2001/01/01 00:00" };

        this.onSubmit = this.onSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDateRegChange = this.onDateRegChange.bind(this);
        this.onDateLastChange = this.onDateLastChange.bind(this);
    }
    onNameChange(e) {
        this.setState({ name: e.target.value });
    }
    onDateRegChange(e) {
        this.setState({ dtReg: e.target.value });
    }
    onDateLastChange(e) {
        this.setState({ dtLast: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        var userName = this.state.name.trim();
        var dateReg = this.state.dtReg;
        var dateLast = this.state.dtLast;
        //if (!userName || !dateReg || !dateLast) {
        //    return;
        //}
        this.props.onUserSubmit({ name: userName, dateReg: dateReg, dateLast: dateLast });
        this.setState({ name: "", dtReg: "2001/01/01 00:00", dtLast: "2001/01/01 00:00" });
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <p>
                    <input type="text"
                        placeholder="Имя пользователя"
                        value={this.state.name}
                        onChange={this.onNameChange} />
                </p>
                <p>
                    <input type="datetime-local"
                        placeholder="Дата регистрации"
                        value={this.state.dtReg}
                        onChange={this.onDateRegChange} />
                </p>
                <p>
                    <input type="datetime-local"
                        placeholder="Дата регистрации"
                        value={this.state.dtLast}
                        onChange={this.onDateLastChange} />
                </p>
                <input type="submit" value="Сохранить" />
            </form>
        );
    }
}

export class Users extends React.Component {
    static displayName = Users.name;

    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
    }

    componentDidMount() {
        this.usersData();
    }

    static renderUsersTable(users) {
        var remove = this.onRemovePhone;
        return (
            <table className='table table-bordered table-sm table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date Registration</th>
                        <th>Date Last Activity</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{new Date(user.dateReg).toLocaleDateString()}</td>
                            <td>{new Date(user.dateLast).toLocaleDateString()}</td>
                            
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    // добавление объекта
    onAddUser(user) {
        if (user) {

            const data = new FormData();
            data.append("name", user.name);
            data.append("dateReg", user.dateReg);
            data.append("dateLast", user.dateLast);
            var xhr = new XMLHttpRequest();
            
            //xhr.open("post", this.props.apiUrl, true);
            xhr.open("post", "/api/user/", true);
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
            //var url = this.props.apiUrl + "/" + user.id;
            var url = "/api/user/" + user.id;

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
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Users.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel">Users List</h1>
                {contents}
                <UserForm onUserSubmit={this.onAddUser} />
            
            </div>
        );
    }

    async usersData() {
        const response = await fetch('api/user');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}