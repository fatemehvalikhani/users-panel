import React,{useState}from "react";
import EditUser from "./EditUser";

function UserItem( { person,key,setUsers }){
    const [edit, setEdit] = useState(false);
    
                                    return  (
                                    <tr key={key}>
                                        <td className="px-6 py-4 text-right"> {person.firstName}</td>
                                        <td className="px-6 py-4 text-right"> {person.lastName}</td>
                                        <td className="px-6 py-4 text-right">{person.userName}</td>
                                         <td className="px-6 py-4 text-right">{person.email}</td>
                                      
                                         <EditUser setUsers={setUsers} setEdit={setEdit} target={person} />
                                     </tr>
                                       
                                       
                                        );
             
    };
    export default UserItem;