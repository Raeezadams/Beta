import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

interface SignUpProps {
  // Add any necessary props here
}

const SignupPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cellNumber,setCellNumber]=useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleCellNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCellNumber(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform signup logic here
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="cell-number">Cell Number</label>
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

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{' '}
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default SignupPage;
