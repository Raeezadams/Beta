import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import useApi from '../Shared/useapi';
import { login } from '../API/Authentification/Index';
import { toast } from 'react-toastify';
import { CurrentUserContext } from '../DataStore';

import './login.css'

const Login = (props) => {
  const navigate = useNavigate();
  const [cellNumber, setCellNumber] = useState(0);
  const [password, setPassword] = useState('');
  const {currentUser} = useContext(CurrentUserContext);
  const handleCellNumberChange = (e) => {
    setCellNumber(parseInt(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const loginHook = useApi({
    action: () => login({
      userName: '',
      email: '',
      password: password,
      phoneNumber: (cellNumber)
  }),
    defer: true,
    onSuccess: (user ) => {
      currentUser.current = user;

      localStorage.setItem('betaUser', JSON.stringify(user));

      navigate("/home")

      toast.success(`Welcome ${user.userName}`)

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
    <div className="login-container">
      <Helmet>
        <title>Login - Beta</title>
        <meta property="og:title" content="Login - Beta" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2"></div>
        <div className="login-container3">
          <h1 className="login-text">Login</h1>
          <h1 className="login-text1">Welcome to Smart Delivery</h1>
          <div className="login-container4">
            <input
              type="number"
              required
              placeholder="Phone number"
              className="login-textinput input"
              onChange={handleCellNumberChange}
            />
            <input
              type="password"
              required
              autoFocus
              placeholder="Password"
              className="login-textinput1 input"
              onChange={handlePasswordChange}
            />
            <button type="button" autoFocus className="signup-button button" onClick={() => loginHook.execute()}>
              {loginHook.inProgress ? 'in progress' : 'Login'}
            </button>
            <div className="login-container5">
              <span className="login-text2">
                <Link to="/signup" className="login-text3">
                  Create Account
                </Link>
             </span>
              <span className="login-text3">Reset password </span>
            </div>
            <div className="login-profile">
              <Link to="/home" className="login-navlink">
                Home
              </Link>
            </div>
            <div className="login-profile1">
              <img
                alt="profile"
                src="/delivery-man-riding-red-scooter-illustration_9845-14-200h.jpg"
                className="login-image"
              />
              <span className="login-text4">Smart Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
