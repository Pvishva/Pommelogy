import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/variety' activeClassName='active'>
              Variety
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact' activeClassName='active'>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='header-icons'>
        <input type='text' placeholder='Search...' />
        {/* <i className='fas fa-search'></i> */}
        <i className='fas fa-user-circle'></i>
      </div>
    </header>
  )
}

export default Header
