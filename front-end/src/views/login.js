import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
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
              type="text"
              required
              placeholder="Phone number"
              className="login-textinput input"
            />
            <input
              type="password"
              required
              autoFocus
              placeholder="Password"
              className="login-textinput1 input"
            />
            <button type="button" className="login-button button">
              Login
            </button>
            <div className="login-container5">
              <span className="login-text2">Create account </span>
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
