import React ,{Component} from 'react';

import Moodall from "./Moodall";
import Addusers from "./Addusers";



  function Users (){
            
        return (
            
               
            <div className="App">       
                <main className='container'>
                
                       <div className='row mx-0 my-2 px-2 justify-content-end'>
                          <button className="btn btn-primary col-md-2" data-toggle="modal" data-target="#exampleModal">add</button>
                        </div>
                    <div className="todosList">
                        <div className="container">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                   <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">email</th>
                                </tr>
                                </thead>

                                <Addusers/>
                                

                                
                             </table>
                                     <td>
                                        <button className="btn btn-danger">delete</button>
                                        <button className="btn btn-primary">edit</button>
                                    </td>
                        </div>
                    </div>
                </main>
        </div>
        )
    }



export default Users;