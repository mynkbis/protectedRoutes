

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignoutButton from './signoutButton'
import './navBar.css'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import TodoApp from '../Pages/todo'



const NavBar = () => {
  const [user, setUser] = useState({})
  
  

useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)   
        //     if (currentUser !== null) {
        // }
        })
        return () => unsubscribe();
        
   },[])

  return (
      <div>
          <nav className='navBar1'>
        <NavLink to='/home'>Home</NavLink>
        {!user && <NavLink to='/login'>Login</NavLink> 
                }
        
     
        { !user &&    <NavLink to='/signup'>SignUp</NavLink> }
             
         {user && <NavLink to='/profile'>Profile</NavLink> 
                }
           
             <SignoutButton/>
      </nav>
      <div>
      
    </div>
          </div>
  )
}

export default NavBar