import Userpanel from "./components/Panel/Userpanel";
import Header from "./components/Header";
import React, {useState} from 'react';

function App(){
  const [users ,setUsers] =useState([]);
  const [showModal,setShowModal]=useState(false);

    return(
            <div>
    
              <Header/>
              <Userpanel
              users={users}
              setUsers={setUsers}
              showModal={showModal}
              setShowModal={setShowModal}
              />
            </div>
    );
}
export default App;
