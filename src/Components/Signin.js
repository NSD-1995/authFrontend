import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './sigin.css'; 

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/login', { email, password });
      if (response.data) {
        navigate('/info');
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="signin-container">
      {!error ? (
        <div>
          <h2 className="signin-heading">Sign In</h2>
          <form onSubmit={handleSubmit} className="signin-form">
            <div className="signin-input">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="signin-input">
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit" className="signin-button">Sign In</button>
          </form>
        </div>
      ) : (
        <div className="error-message">{error}</div>
      )}
    </div>
  );
};

export default Signin;
