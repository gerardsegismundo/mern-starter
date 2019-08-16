import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' >
          Home
      </NavLink>
    </nav>
    )
}

export default Navbar
