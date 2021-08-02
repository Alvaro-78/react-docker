import React, { useState } from 'react';
import { connect } from 'react-redux';
import { LOGIN } from "../redux/types/userType";
import { useHistory } from 'react-router-dom';

import './Login.css'


const Login = ( props ) => {

    const [ data, setData ] = useState({
        name: '',
        email: '',
        password: ''
    });

    let history = useHistory();

    const handleState = (event) => {
        setData({...data, [event.target.name]: event.target.type === "number" ? + event.target.value : event.target.value})
    };

    console.log(data)
    
    const sendData = () => {
        
        // let body = {
            
        //     name: data.name,
        //     email: data.email,
        //     password: data.password
        // };

        // console.log(body)

        props.dispatch({type: LOGIN, payload: data})
        return  history.push("/home");

    }

    return (
        <>
            <div className="loginBody">
                <form className="loginForm">
                    <div className="mb-3"><br/>
                        <label  className="form-label">Name: </label>
                        <input type="email" className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            name="name"
                            // pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$"
                            required
                            onChange={handleState} 
                        />
                        <div id="emailHelp" className="form-text">Enter only words.</div>
                    </div>
                    <div className="mb-3"><br/>
                        <label  className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp"
                            name="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={handleState} 
                        />
                        <div id="emailHelp" className="form-text">Introduce a valid email.</div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="password" 
                            className="form-control" id="exampleInputPassword1"
                            name="password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            onChange={handleState}
                        />
                        <div id="emailHelp" className="form-text">Uppercase,number and special character.</div>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="loginButton" onClick={() => sendData()}>Submit</button><br/>
                </form>
            </div>
        </>
    )
}

export default connect()(Login);
