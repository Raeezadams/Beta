import 'react-toastify/dist/ReactToastify.css';
import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Outsourcing from './views/outsourcing'
import SoftwareDevelopment from './views/software-development'
import Consulting from './views/consulting'
import Profile from './views/profile'
import Partner from './views/partner'
import Home from './views/home'
import Login from './views/login'
import Signup from './views/signup'
import UIUXDesign from './views/ui-ux-design'
import Catalogue from './views/catalogue'
import NotFound from './views/not-found'
import DataStore from '../src/DataStore'

const root = ReactDOM.createRoot(
  document.getElementById('app') 
);

const App = () => {
  return (
    <Router>
      <DataStore>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </DataStore>
      <ToastContainer/>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
