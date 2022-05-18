import React ,{Component, useState} from 'react';

import AddUser from "./AddUser";
import Userlist from "./Userlist";
 


  function Userpanel (){
      const [users ,setUsers] =useState([]);
            
        return (
            
               
            <div className="App">  
                <AddUser addUser={setUsers}/>     
                <main className='container'>
                    
                      <div className="todosList">
                        <div className="container">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                   <th scope="col">firstName</th>
                                    <th scope="col"> lastName</th>
                                    <th scope="col">userName</th>
                                    <th scope="col">email</th>
                                    <th className='my-2 px-2'>
                                        <button className="btn  btn-danger">delete</button>
                                        <button className="btn btn-primary">edit</button>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    {users.length
                                
                                ? users.map((user, index)=><Userlist person={user} key ={index} users={users}  setusers={setUsers}/> )
                                :'there arent any users'
                               
                               }  
                                    
                              
                                </tr>
                                
                                </tbody>

                                
                               
                             </table>
                                     <td>
                                        
                                    </td>
                        </div>
                    </div>
                </main>
        </div>
        )
    }



export default Userpanel;