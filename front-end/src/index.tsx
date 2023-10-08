import './style.css'
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import SignupPage from './Auth/Signup/Signup';
import LoginPage from './Auth/Login/Login';
import HomePage from './HomePage/HomePage';
import ProfilePage from './ProfilePage/profile';
import { ToastContainer } from 'react-toastify';
import DataStore from '../src/DataStore'
import Catalogue from '../src/CataloguePage/Catalogue';

const root = ReactDOM.createRoot(
  document.getElementById('app') as HTMLElement
);

root.render(
  <React.StrictMode>
    <DataStore>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
    <ToastContainer/>
   </DataStore>
  </React.StrictMode>
);

