import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

interface LoginProps {
  // Add any necessary props here
}

const LoginPage: React.FC<LoginProps> = () => {
  const [cellNumber, setCellNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleCellNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform login logic here
  };


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cellNumber">Cell Number</label>
        <input
          type="number"
          id="cell-number"
          value={cellNumber}
          onChange={handleCellNumberChange}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <button type="submit">Login</button>
      </form>
      <p>
        Dont have an account?{' '}
        <Link to="/">Signup</Link>
      </p>
    </div>
  );
};

export default LoginPage;
