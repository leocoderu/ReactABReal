import React, { Component } from 'react';

export class Users extends Component {
    static displayName = Users.name;

    constructor(props) {
        super(props);
        this.state = { users: [], loading: true };
    }

    componentDidMount() {
        this.usersData();
    }

    static renderUsersTable(users) {
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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Users.renderUsersTable(this.state.users);

        return (
            <div>
                <h1 id="tabelLabel">Users List</h1>
                {contents}
            </div>
        );
    }

    async usersData() {
        const response = await fetch('user');
        const data = await response.json();
        this.setState({ users: data, loading: false });
    }
}