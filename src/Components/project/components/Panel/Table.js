import Reac, { useState } from "react";
import UserItem from "./UserItem";
import Userlist from "./Userlist";




function Table( { setUsers ,users,key}){
    
    const [user ,setUser] =useState([]);



                                    return  (

                                  <div>

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
                                      Edit & Delete
                                  </th>
                              </tr>
                         
                   
                            </thead>
                              
                            <tbody>
                                           
           
                              {users.length
        
                                ? users.map((user)=>(
                                <Userlist  key ={user.id} user={user}  setUsers={setUsers}/> ))
                                :"there arent any users"}  

                                 {users.map((user, index) => (
                                <UserItem setUsers={setUsers} key={key} person={user}/>
                                 ))}
                            </tbody>
                          </table>
                             
                                    <td></td>  
                                  
                      </div>
                  </div> 
                

            </main>
                                    
                                  </div>
                                   );     
    };
    export default Table;