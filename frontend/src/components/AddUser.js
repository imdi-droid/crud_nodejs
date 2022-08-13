import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate, Link} from "react-router-dom";

const AddUser=() => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");

    const navigate = useNavigate();

    const saveUser = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="columns is-centered mt-5">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Type your name' />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Type your email' />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Gender</label>
                    <div className="control">
                        <div 
                        value={gender} onChange={(e) => setGender(e.target.value)}
                         className="select is-fullwidth">
                            <select>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <button type='submit' className="button is-small is-success">Save</button>
                    <Link to={`/`} className="button is-small is-danger ml-2">Cancel</Link>
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default AddUser