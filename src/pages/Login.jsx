// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField'
import { FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import '../css/login.css'

const Login= () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigateTo('/home')
    }
  };
const handleSubmit = () => {
  navigateTo('/home')
}
  return (
    <div>
      
    <div className="login-wrapper">
        <div className="heading">
          <div className="line"></div>
          <div className="login-text">
            <h1 id="welcome">Welcome</h1>
            <p id="sign-caption">Sign In to continue</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='form'>  
        <div className="login-inputs">
          <div className="username">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/22C3E6/gender-neutral-user.png"
              alt="gender-neutral-user"
              className="input-icon"
            />
            <TextField
              id="outlined-basic"
              label="username / mobile number"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required='true'
            />
          </div>
          <div className="password">
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/22C3E6/lock--v1.png"
              alt="lock--v1"
              className="input-icon"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required='true'
            />
          </div>
        </div>
        <div className="options">
          <div className="check-box">
          <FormControlLabel control={<Checkbox defaultChecked />} />
          <p>Remember Me</p>
          
          </div>
          <a href="#"><p>Forgot Password?</p></a>
        </div>
        <div className="button">
          <a href='/home'><button className="signin-btn" onClick={handleLogin}>Sign In</button></a>
        </div>
        </form>
      </div>
      </div>
  );
};

export default Login;
