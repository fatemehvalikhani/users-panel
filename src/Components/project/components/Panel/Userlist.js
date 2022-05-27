import React from "react";
import DeleteUser from "./DeleteUser";
 
function Userlist( { user,setUsers}){

    
                                return(
                                <tr>
                                    <td> {user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.userName}</td>
                                     <td>{user.email}</td>
                                     <td>
                                        <DeleteUser setUsers={setUsers} user={user} id={user.id}/>
                                     
                                     <button className="btn btn-primary">edit</button>

                                     </td>
                                   
                                </tr>
                                
                                );

                                
     
}
export default Userlist;