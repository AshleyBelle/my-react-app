import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './CSS/style.css'

const Register = () => {
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
  return (
    <div className='login'>
        <h1>Sign Up</h1>
        <form>
            <input 
                required 
                type="text" 
                placeholder='username'
                onChange={(e) => setUsername(e.target.value)}/>
            <input 
                required 
                type="email" 
                placeholder='email address'
                onChange={(e) => setEmail(e.target.value)}/>
            <input 
                required 
                type="password" 
                placeholder='password'
                onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleRegister}>Register</button>
            <p>Error</p>
            <span>Do you have an account?<Link to="/login">Login</Link></span>
        </form>
    </div>
    
  )
}

export default Register