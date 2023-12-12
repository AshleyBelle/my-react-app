import React, { useState } from 'react'
import './CSS/style.css'
import { Link } from 'react-router-dom'

const Login = () => {
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
  return (
    <div className='login'>
      <h1>Login</h1>
        <form>
            <input 
                type="text" 
                placeholder='username' 
                onChange={(e) => setUsername(e.target.value)}/>
            <input 
                type="password" 
                placeholder='password' 
                onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <span>Don't have an account?<Link to="/register">Register</Link></span>
        </form>
      </div>
    
  )
}

export default Login
