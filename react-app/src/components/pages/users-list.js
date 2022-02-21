import React from 'react';
import './pages.css';

const ItemTable = ({data}) => {
    console.log("ItemTable", data);
    const items = data.map(({id, name, dateReg, dateAct}) => {

        return (
            <tr key={id+1}>
                <td><input className='col-num' name='id' type='text' defaultValue={id+1}/></td>
                <td><input className='col-name' name='userName' type='text' defaultValue={name}/></td>
                <td><input className='col-date' name='dateReg' type='text' defaultValue={(new Date(dateReg)).toLocaleDateString()}/></td>
                <td><input className='col-date' name='dateAct' type='text' defaultValue={(new Date(dateAct)).toLocaleDateString()}/></td>
            </tr>
        );
    });

    //if(data.length > 0)
    return (
       items
    );
};

 const UsersList = ({toData}) => {
        //console.log("toData: ",toData);
        return (
            <div className="users-list">
                <h1>USERS</h1>
                <table>
                    <thead>
                    <tr className="table-header">
                        <td>№</td>
                        <td>NAME</td>
                        <td>DATE REGISTRATION</td>
                        <td>DATE ACTIVITY</td>
                    </tr>
                    </thead>
                    <tbody>
                    <ItemTable data={toData}/>
                    </tbody>
                </table>
            </div>
        );
};

export default UsersList;