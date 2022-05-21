import React from "react";

import AddUser from "./AddUser";
import Userlist from "./Userlist";

function Userpanel({ users, setUsers, showModal, setShowModal }) {
  return (
    <div className="App">
      <AddUser
        users={users}
        setUsers={setUsers}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <main className="container">
        <div className="todosList">
          <div className="container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">firstName</th>
                  <th scope="col"> lastName</th>
                  <th scope="col">userName</th>
                  <th scope="col">email</th>
                  <th className="my-2 px-2">
                    Edit & Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length
                  ? users.map((user, index) => (
                      <Userlist user={user} key={index} />
                    ))
                  : "there arent any users"}
              </tbody>
            </table>
            <td></td>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Userpanel;
