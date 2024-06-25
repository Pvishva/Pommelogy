import React, { useState } from 'react'
import '../css/SignUp.css'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const togglePasswordVisibility1 = () => setShowPassword1(!showPassword1)
  const togglePasswordVisibility2 = () => setShowPassword2(!showPassword2)

  return (
    <div className='signup-container'>
      <form className='signup-form'>
        <h5>Create a New Account</h5>
        <br />
        <div className='form-input'>
          <div className='input-wrapper'>
            <FaUser className='input-icon' />
            <input
              type='text'
              id='first-name'
              name='first-name'
              placeholder='First name'
            />
          </div>
          <div className='input-wrapper'>
            <FaUser className='input-icon' />
            <input
              type='text'
              id='last-name'
              name='last-name'
              placeholder='Last name'
            />
          </div>
        </div>
        <div className='input-wrapper'>
          <FaEnvelope className='input-icon' />
          <input type='email' id='email' name='email' placeholder='Email' />
        </div>
        <div className='form-input'>
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
          <div className='input-wrapper'>
            <FaLock className='input-icon' />
            <input
              type={showPassword2 ? 'text' : 'password'}
              id='confirm-password'
              name='confirm-password'
              placeholder='Confirm Password'
            />
            {showPassword2 ? (
              <FaEyeSlash
                className='eye-icon'
                onClick={togglePasswordVisibility2}
              />
            ) : (
              <FaEye className='eye-icon' onClick={togglePasswordVisibility2} />
            )}
          </div>
        </div>
        <button type='submit'>Sign Up</button>
        <br />
        <h6>
          Already have an Account?&nbsp;
          <a href='/login'>Login</a>
        </h6>
      </form>
    </div>
  )
}

export default SignUp
