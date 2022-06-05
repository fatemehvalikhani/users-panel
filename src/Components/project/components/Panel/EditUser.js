import React, { useState } from "react";

function EditUser({ user, editDone }) {

    const [editUser, setEditUser] = useState({
        name: user.name,
        last_Name: user.last_Name,
        userName: user.userName,
        email: user.email
    });

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setEditUser({
            ...editUser,
            [name]: value,
        });

    };



    return (
        <tr className="hover:bg-gray-100" >


            <td className="text-center py-2 px-4 " >
                <input required id="name"
                    type="text"
                    defaultValue={user.name}
                    className="input text-xs"
                    onChange={handleInputs}
                    name="name"
                />

            </td>
            <td className="text-center py-2 px-4 " >
                <input required type="text"
                    defaultValue={user.last_name}
                    className="input text-xs"
                    onChange={handleInputs}
                    name="last_name" />
            </td>
            <td className="text-center py-2 px-4 " >
                <input required type="text"
                    defaultValue={user.userName}
                    className="input text-xs"
                    onChange={handleInputs}
                    name="userName" />

            </td>

            <td className="text-center py-2 px-4 " >
                < input required type="text"
                    defaultValue={user.email}
                    className="input text-xs"
                    onChange={handleInputs}
                    name="email" />
            </td>
            <td>
                <button className="btn btn-primary"
                    onClick={() => editDone(editUser)} >
                    edit </button>
            </td>
        </tr>


    )
}
export default EditUser;