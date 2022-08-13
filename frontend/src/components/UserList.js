import React ,{useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Moment from "react-moment";
import 'moment-timezone';
import axios from "axios";

const UserList = () => {

    const [users, setUser] = useState([]);
    
    useEffect(()=>{
        getUsers();
    }, []);


    const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
    };


    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    

  return (
    <div className="container">
        <div className="columns mt-5 is-centered ml-5 mr-5">
            <div className="column is-fullWidth">
                <Link to={`add`} className="button is-small mb-3 is-success">Add New</Link>
                <table className='table is-striped is-fullwidth is-hoverable'>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Created</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index)=>(
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td><Moment locale='id' format='L'>{user.createdAt}</Moment></td>
                            <td>
                                <Link to={`edit/${user.id}`} className="button is-small is-info mr-2">Edit</Link>
                                <button onClick={()=> deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default UserList
