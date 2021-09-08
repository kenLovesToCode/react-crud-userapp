import React, { useState } from 'react'
import UserEditor from './UserEditor'
import UserTable from './UserTable';

export default function UserDisplay(props) {

    const [showEditor, setShowEditor] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const createUser = () => {
        setShowEditor(true);
        setSelectedUser({});
    }

    const saveUser = (user) => {
        props.saveCallback(user);
        setShowEditor(false);
        setSelectedUser(null);
    }

    const cancelEditing = () => {
        setShowEditor(false);
        setSelectedUser(null);
    }

    const startEditing = (data) => {
        setSelectedUser(data);
        setShowEditor(true);
    }

    if(showEditor){
        //if false, show userEditor
        return (
            <UserEditor user={selectedUser} jobPositions={props.jobPositions} saveCallback={saveUser} cancelCallback={cancelEditing}/>
        )
    }else{
        //show table
        return (
            <div className="m-1">
                <UserTable users={props.users} editCallback={startEditing} deleteCallback={props.deleteCallback}/>
                <button className="btn btn-success" onClick={createUser}>Create new user</button>
            </div>
        )
    }

    
}
