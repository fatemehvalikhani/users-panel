import React ,{Component} from 'react';
import Header from './Header';

class Users extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                <main className='container'>
                    <div className='row mx-0 my-2 px-2 justify-content-end'>
                        <button className="btn btn-primary col-md-2" data-toggle="modal" data-target="#exampleModal">add</button>
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                    </div>


                    <div className="todosList">
                        <div className="container">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Lastname</th>
                                    <th scope="col">National code</th>
                                    <th scope="col">birth day</th>

                                    <th scope="col">phone number</th>
                                    <th scope="col">email</th>
                                    <th scope="col">address</th>

                                    <th scope="col">actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <button className="btn btn-danger">delete</button>
                                        <button className="btn btn-primary">edit</button>
                                    </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </main>
        </div>
        )
    }
}


export default Users;