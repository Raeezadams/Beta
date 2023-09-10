import '../src/style.css'
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import SignupPage from './Auth/Signup/signup';
import LoginPage from './Auth/Login/login';
import HomePage from './HomePage/HomePage';
import ProfilePage from './ProfilePage/profile';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
    <ToastContainer/>
  </React.StrictMode>
);

