import React from "react";

function Userlist( { user}){
                                return(
                                    <tr>
                                    <td> {user.firstNam}</td>
                                    <td>{user.lastNam}</td>
                                    <td>{user.userName}</td>
                                     <td>{user.email}</td>
                                     <td>
                                     <button className="btn  btn-danger">delete</button>
                                     <button className="btn btn-primary">edit</button>

                                     </td>
                                   
                                </tr>
                                
                                );
                                
     
}
export default Userlist;