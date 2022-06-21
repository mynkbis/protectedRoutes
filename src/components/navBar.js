import React  from 'react'
import Login from './login'
import Profile from './profile'
import './navBar.css'
import Home from './home'

const NavBar = () => {
  return (
      <div>
          <nav className='navBar1'>
         
              <Login />
              <Profile />   
             
          </nav>
          </div>
  )
}

export default NavBar