import React, { useState } from "react";
import EditUser from "./EditUser";
import axios from 'axios'

function Userlist({ user, setUsers }) {
    const [editMode, setEditMode] = useState(false);


    async function deleteHandler() {
        try {
            const response = await axios.delete(`https://628ad989280122de359cf373.endapi.io/react-project/${user.id}`)
            console.log(response);
            if (response.status === 200) {
                setUsers((prevState) => prevState.filter((thisUser) => thisUser.id !== user.id));
            }
        } catch (error) {
            console.log(error.response.data.message);
        }


    }

    async function editHandler(newData) {
        console.log("newData", newData);
        try {
            const response = await axios.put(`https://628ad989280122de359cf373.endapi.io/react-project/${user.id}`, { name: newData.name, last_name: newData.last_name, email: newData.email })
            console.log(response);
            if (response.status === 200) {
                setUsers((prevState) =>
                    prevState.map((person) => (person.id === user.id ? response.data.data : person))
                );
                setEditMode(false)
            }
        } catch (error) {
            console.log(error.response.data.message);
        }


    }




    return (
        editMode ? <EditUser setUsers={setUsers} user={user} editDone={editHandler} /> : <tr>

            <td className="px-6 py-4 text-right"> {user.name}</td>
            <td className="px-6 py-4 text-right">{user.last_name}</td>
            <td className="px-6 py-4 text-right">{user.userName}</td>
            <td className="px-6 py-4 text-right">{user.email}</td>
            <td className="px-6 py-4 flex justify-evenly">
                <button className="btn  btn-danger" onClick={deleteHandler}>
                    delete
                </button>
                <button className="btn  btn-primary" onClick={() => setEditMode(true)}>
                    Edit
                </button>
            </td>

        </tr>


    );
};
export default Userlist;