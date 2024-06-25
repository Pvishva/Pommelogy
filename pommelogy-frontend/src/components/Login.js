import React, { useState } from 'react'
import '../css/Login.css'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

const Login = () => {
  const [showPassword1, setShowPassword1] = useState(false)

  const togglePasswordVisibility1 = () => setShowPassword1(!showPassword1)

  return (
    <div className='login-container'>
      <form className='login-form'>
        <h1>Login</h1>
        <div className='input-wrapper'>
          <FaEnvelope className='input-icon' />
          <input type='email' id='email' name='email' placeholder='Email' />
        </div>
        <div className='input-wrapper'>
          <FaLock className='input-icon' />
          <input
            type={showPassword1 ? 'text' : 'password'}
            id='password'
            name='password'
            placeholder='Password'
          />
          {showPassword1 ? (
            <FaEyeSlash
              className='eye-icon'
              onClick={togglePasswordVisibility1}
            />
          ) : (
            <FaEye className='eye-icon' onClick={togglePasswordVisibility1} />
          )}
        </div>
        <button type='submit'>Login</button>
        <br />
        <h6>
          Don't have an account?&nbsp;
          <a href='/signup'>Signup</a>
        </h6>
      </form>
    </div>
  )
}

export default Login
