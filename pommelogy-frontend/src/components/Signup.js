import React from 'react'
import '../css/SignUp.css'
import background1 from '../assets/background1.mp4'

const SignUp = () => {
  return (
    <div className='signup-container'>
      <video className='backgroundVideo' autoPlay loop muted>
        <source src={background1} type='video/mp4' />
      </video>
      <form className='signup-form'>
        <h1>Create a New Account</h1>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name'
        />

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='Enter your password'
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
