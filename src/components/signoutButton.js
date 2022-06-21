import React, { useState } from 'react'
import { auth } from '../firebase'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignoutButton = () => {
    const [user, setUser] = useState({})
    const Navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    
    },[])

    const logout = async () => {
       await signOut(auth);
        sessionStorage.clear();
        Navigate("home")
    
    }

    return (
        <>
            <div> 
                {user?.email}
                
                {!user ? true : <button onClick={logout}>logout</button>
                }
               
                {/* {auth.currentUser.email}  
                // whene refresehd it will give error as email set to empty so need to change this */}
                
                </div>
  </>)
}

export default SignoutButton