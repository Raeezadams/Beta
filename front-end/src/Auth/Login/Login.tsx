import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import useApi from '../../Shared/useapi';
import { User, login } from '../../API/Authentification/Index';
import { toast } from 'react-toastify';


interface LoginProps {
  // Add any necessary props here
}

const LoginPage: React.FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [cellNumber, setCellNumber] = useState<number>(0);
  const [password, setPassword] = useState('');

  const handleCellNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellNumber(parseInt(e.target.value));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    onSuccess: (user: User ) => {
      navigate("/home")

      toast.success(`Welcome ${user.userName}`)

    },
    onError: (e: any) => {
      if(e && e.response && e.response.data && e.response.data.errorMessages)
      {
       e.response.data.errorMessages.forEach((message:string) => {
         toast.error(message);
        });
      } 
      else toast.error("Network Error")
     }
}, [])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
  };
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Target Online Pty Ltd</title>
        <meta property="og:title" content="Login - Target Online Pty Ltd" />
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
                <Link to="/signup" className="login-navlink">
                  Create Account
                </Link>
             </span>
              <span className="login-text3">Reset password </span>
            </div>
            <div className="login-profile">
              <Link to="/" className="login-navlink">
                Home
              </Link>
            </div>
            <div className="login-profile1">
              <img
                alt="profile"
                src= {require("../../Assets/delivery-man-riding-red-scooter-illustration_9845-14-200h.jpg")}
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

export default LoginPage
