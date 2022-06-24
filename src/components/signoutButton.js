import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const SignoutButton = () => {
    const [user, setUser] = useState({})
    const Navigate = useNavigate();

    
    useEffect(() => {
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)  
        })
        return () => unsubscribe();
        
   },[])

    const logout = async () => {
       await signOut(auth);
        // sessionStorage.clear();
        Navigate("../login")
    
    }

    return (
        <>
            <div> 
                {user?.email}
                {!user ? true : <button onClick={logout}>logout</button>}
            </div>
        </>)
}

export default SignoutButton