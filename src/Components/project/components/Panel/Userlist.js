import React from "react";
import DeleteUser from "./DeleteUser";

function Userlist( { user,setUsers}){


                                return  (
                                <tr>
                                    <td className="px-6 py-4 text-right"> {user.firstName}</td>
                                    <td className="px-6 py-4 text-right">{user.lastName}</td>
                                    <td className="px-6 py-4 text-right">{user.userName}</td>
                                     <td className="px-6 py-4 text-right">{user.email}</td>
                                     <td className="px-6 py-4 flex justify-evenly">
                                        <DeleteUser setUsers={setUsers} user={user} id={user.id}/>
                                        
                                       
                                     </td>
                                     
                                 </tr>
                                          );
};
export default Userlist;