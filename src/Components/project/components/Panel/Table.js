import React, { useEffect } from "react";
import Userlist from "./Userlist";
import axios from 'axios'



function Table({ setUsers, users, key }) {

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://628ad989280122de359cf373.endapi.io/react-project/')
      console.log(response);
      if (response.status === 200) {
        setUsers(response.data.data)
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (

    <div>

      <main className='container'>

        <div className="todosList">
          <div className="container">
            <table className="table table-bordered">

              <thead>
                <tr>
                  <th scope="col">firstName</th>
                  <th scope="col">lastName</th>
                  <th scope="col">userName</th>
                  <th scope="col">email</th>
                  <th className='my-2 px-2'>
                    Edit & Delete
                  </th>
                </tr>


              </thead>

              <tbody>


                {users.length

                  ? users.map((user) => (
                    <Userlist key={user.id} user={user} setUsers={setUsers} />))
                  : <tr><td>"there arent any users" </td></tr>}

              </tbody>
            </table>



          </div>
        </div>


      </main>

    </div>
  );
};
export default Table;