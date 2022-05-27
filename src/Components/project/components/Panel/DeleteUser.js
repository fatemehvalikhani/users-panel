import React from "react";

function DeleteUser( {id,user,setUsers}){

    function handleDlete(){
        console.log(id);

        setUsers((prevState)=> prevState.filter( ( user )=> user.id !==id));
    }
    
                                return(
                                <div>
                                     <button className="btn  btn-danger" onClick={() => handleDlete()}>

                                         delete

                                     </button>
                                     
                                </div>
                                
                                );

                                
     
}
export default DeleteUser;