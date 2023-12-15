import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/style.css'

const Register = () => {
  return (
    <div className='login'>
        <h1>Sign Up</h1>
        <form>
            <input required type="text" placeholder='username'/>
            <input required type="email" placeholder='email address'/>
            <input required type="password" placeholder='password'/>
            <button>Register</button>
            <p>Error</p>
            <span>Do you have an account?<Link to="/login">Login</Link></span>
        </form>
    </div>
    
  )
}

export default Register