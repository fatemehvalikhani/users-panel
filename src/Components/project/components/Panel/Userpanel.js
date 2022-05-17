import React ,{Component} from 'react';

import AddUser from "./AddUser";
import Userlist from "./Userlist";
 


  function Userpanel ({users}){
      console.log(users);

      const Userpanel({users,setUsers}) => {
            
        return (
            
               
            <div className="App">  
                <AddUser/>     
                <main className='container'>
                        
                   
                    
                      <div className="todosList">
                        <div className="container">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                   <th scope="col">first name</th>
                                    <th scope="col"> last name</th>
                                    <th scope="col">user name</th>
                                    <th scope="col">email</th>
                                    <th className='my-2 px-2'>
                                        <button className="btn  btn-danger">delete</button>
                                        <button className="btn btn-primary">edit</button>
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>

                                   
                                </tr>
                                




                                   {user.length
                                      users.map((user))=>( 
                                      
                                      <Userlist
                                       user={user}  
                                       key={user name}    
                                       setUsers={setUsers}    
                                       users={users}
                                      
                                      
                                      />
                                         

                                      )}

                                   }
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