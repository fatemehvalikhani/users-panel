import React, { useState } from "react";
import axios from 'axios';

function AddUser({ setUsers, showModal, setShowModal }) {

  const initialUserData = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
  };

  const [user, setUser] = useState(initialUserData);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };

  const addUserHandler = async () => {


    try {
      const response = await axios.post('https://628ad989280122de359cf373.endapi.io/react-project/', {
        name: user.firstName,
        last_name: user.lastName,
        email: user.email,
      })
      if (response.status === 200) {
        setUser(initialUserData)
        setUsers((prevState) => {
          return [...prevState, response.data.data];
        })

      }
    } catch (error) {
      console.log(error.response.data.message);
    }

  }



  return (
    <div className='row mx-0 my-2 px-2 justify-content-end'>
      <button className="btn btn-primary col-md-2" data-toggle="modal" data-target="#exampleModal"
        onClick={() => setShowModal(true)}
      >add
      </button>



      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">

          <form className="modal-content" onSubmit={addUserHandler} noValidate>

            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            {showModal && (
              <div className="modal-body">


                <div className="needs-validation" noValidate>


                  <div className="form-row">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom01">First name</label>
                      <input type="text"
                        name="firstName"
                        onChange={changeInput}
                        className="form-control"
                        id="validationCustom01"
                        value={user.firstName}
                        placeholder="First name" required />
                      <div className="valid-feedback">

                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustom02">Last name</label>
                      <input type="text"
                        name="lastName"
                        onChange={changeInput}
                        className="form-control"
                        id="validationCustom02"
                        value={user.lastName}
                        placeholder="Last name" required />
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="validationCustomUsername">Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="inputGroupPrepend">@</span>
                        </div>
                        <input type="text"
                          name="userName"
                          onChange={changeInput}
                          className="form-control"
                          id="validationCustomUsername"
                          value={user.userName}
                          placeholder="Username" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">

                    <div className="form-group col-md-6">
                      <label htmlFor="inputEmail4">Email</label>
                      <input type="email"
                        name="email"
                        onChange={changeInput}
                        className="form-control"
                        id="inputEmail4"
                        value={user.email}
                        placeholder="Email" />
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button onClick={() => addUserHandler()} type="button" className="btn btn-primary" data-dismiss="modal"> Save</button>
                    </div>
                  </div>
                </div>


              </div>
            )}

          </form>

        </div>
      </div>

    </div>

  );
}
export default AddUser;
