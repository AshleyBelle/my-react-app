import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './CSS/style.css';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:3000/user/register', {
        username,
        email,
        password,
      });

      console.log(response.data); // Handle the response accordingly, e.g., show a success message
      navigate('/login'); //redirect to login page
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className='login'>
        <h1>Register</h1>
        <form>
            <input 
                required 
                type="text" 
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            <input 
                required 
                type="email" 
                placeholder='email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            <input 
                required 
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type='submit' onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
            <span>Do you have an account?<Link to="/login">Login</Link></span>
        </form>
    </div>
    
  )
}

export default Register

/*
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleRegister = async () => {
        try {
          const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
          });
    
          const data = await response.json();
          console.log(data); // Handle the response accordingly, e.g., show a success message or an error message
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };

<input 
  required 
  type="text" 
  placeholder='username'
  onChange={(e) => setUsername(e.target.value)}/>
*/