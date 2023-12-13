import React, { useState } from 'react';
import './CSS/style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/login', {
        username,
        password,
      });

      const data = response.data;
      console.log(data); // Handle the response accordingly, e.g., set user state or show an error message
      //check if login was successful then main page "/"
      if (data === 'Login successful'){
        navigate('/');
      } else{
        setError('Invalid credentials. Please try again.');
      }

    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder='username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin}>Login</button>
        {error && <p className="error-message">{error}</p>}
        <span>
          Don't have an account?<Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login

/*
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () =>{
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data); // Handle the response accordingly, e.g., set user state or show an error message
    } catch (error) {
      console.error('Error during login:', error);
    } 
  };
*/