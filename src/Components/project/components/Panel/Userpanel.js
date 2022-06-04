import React, { useState } from 'react';
import AddUser from "./AddUser";
import Table from './Table';


function Userpanel() {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);

    return (

        <div className="App">
            <AddUser
                setUsers={setUsers}
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <Table setUsers={setUsers} users={users} />

        </div>
    );
}



export default Userpanel;