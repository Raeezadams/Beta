import './signup.css'

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import {toast} from "react-toastify";
import useApi from '../Shared/useapi';
import { signup as signupApi } from '../API/Authentification/Index';

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cellNumber,setCellNumber]=useState(0)
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCellNumberChange = (e) => {
    setCellNumber(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
  };

  const signupHook = useApi({
    action: () => signupApi({
      userName: username,
      email: email,
      password: password,
      phoneNumber: (cellNumber)
  }),
    defer: true,
    onSuccess: (user ) => {

      localStorage.setItem('betaUser', JSON.stringify(user));
      
      navigate("/home")
      location.reload();

      toast.success("You have signed up sucessfully")

    },
    onError: (e) => {
      if(e && e.response && e.response.data && e.response.data.errorMessages)
      {
       e.response.data.errorMessages.forEach((message) => {
         toast.error(message);
        });
      } 
      else toast.error("Network Error")
     }
}, [])
  return (
    <div className="signup-container">
      <Helmet>
        <title>Signup - Beta</title>
        <meta property="og:title" content="Signup - Beta" />
      </Helmet>
      <div className="signup-container1">
        <div className="signup-container2"></div>
        <div className="signup-container3">
          <h1 className="signup-text">Create Account</h1>
          <h1 className="signup-text1">Welcome to Smart Delivery</h1>
          <div className="signup-container4">
            <div className="signup-container5">
              <input
                type="text"
                required
                autoFocus
                placeholder="User name"
                className="signup-textinput input"
                value={username}
                onChange={handleUsernameChange}
              />
              <input
                type="email"
                required
                autoFocus
                placeholder="Email"
                className="signup-textinput3 input"
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type="number"
                required
                autoFocus
                placeholder="Cell Number"
                className="signup-textinput3 input"
                value={cellNumber}
                onChange={handleCellNumberChange}
              />
              <input
                type="password"
                required
                autoFocus
                placeholder="Password"
                className="signup-textinput4 input"
                value={password}
                onChange={handlePasswordChange}
              />
              <button type="button" autoFocus className="signup-button button" onClick={() => signupHook.execute()}>
                {signupHook.inProgress ? 'in progress' : 'Sign Up'}
              </button>
            </div>
            <div className="signup-container6">
              <Link to="/" className="signup-navlink">
                Login
              </Link>
            </div>
            <Link to="/" className="signup-navlink1">
              <div className="signup-profile">
                <span className="signup-text2">Home</span>
              </div>
            </Link>
            <div className="signup-profile1">
              <img
                alt="profile"
                src= {require("../Assets/delivery-man-riding-red-scooter-illustration_9845-14-200h.jpg")}
                className="signup-image"
              />
              <span className="login-text3">Smart Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
