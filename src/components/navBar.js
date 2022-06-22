import React from 'react'
import { NavLink } from 'react-router-dom'
import SignoutButton from './signoutButton'
import './navBar.css'


const NavBar = () => {
  return (
      <div>
          <nav className='navBar1'>
               <NavLink to='/home'>Home</NavLink>
               <NavLink to='/login'>Login</NavLink>
              <NavLink to='/profile'>Profile</NavLink>
              <NavLink to='/signup'>SignUp</NavLink>
             <SignoutButton/>
          </nav>
          </div>
  )
}

export default NavBar