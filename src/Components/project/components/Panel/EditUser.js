import Reac, { useState } from "react";

function EditUser(target, setEdit, setUsers) {

    const [user, setUser] = useState({
        id: target,
        firstName: target.firstName,
        lastName: target.lastName,
        userName: target.userName,
        email: target.email
    });

    const handleInputs = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        setUsers((prevState) =>
            prevState.map((person) => (person.id === target.id ? user : person))
        );
        setEdit(false);
    }



    return ( 
        <tr className = "hover:bg-gray-100" >
        <button className = "btn btn-primary"
        onClick = { handleSubmit } >
        edit </button>

        <td className = "text-center py-2 px-4 " >
        <input required id = "name"
        type = "text"
        defaultValue = { user.firstName }
        className = "input text-xs"
        onChange = { handleInputs }
        name = "name" />
        </td>  
        <td className = "text-center py-2 px-4 " >
        <input required type = "text"
        defaultValue = { user.lastName }
        className = "input text-xs"
        onChange = { handleInputs }
        name = "name" />
        </td>
         <td className = "text-center py-2 px-4 " >
        <input required type = "text"
        defaultValue = { user.userName }
        className = "input text-xs"
        onChange = { handleInputs }
        name = "name" />
        
        </td>

        <td className = "text-center py-2 px-4 " >
        < input required type = "text"
        defaultValue = { user.email }
        className = "input text-xs"
        onChange = { handleInputs }
        name = "name" />
        </td>            
        </tr>


    )
}
export default EditUser;