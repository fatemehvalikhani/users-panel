import React ,{useState} from 'react';
import AddUser from "./AddUser";
import Table from './Table';


  function Userpanel ( {users,setUsers,showModal,setShowModal}){
    
        return (
            
               
            <div className="App">  
              
                <AddUser addUser={setUsers}
                setUsers={setUsers}
                showModal={showModal}
                setShowModal={setShowModal}
                />    
                <Table setUsers={setUsers}  users={users}  />

               
        </div>
        );
    }
       


export default Userpanel;