import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import TodoApp from './todo'
import './profile.css'
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
  
  let unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  {
    setUser(currentUser)
    if(!currentUser)navigate("../")
   })
  return () => unsubscribe()
}, [])

  return (
    <>
      <h1>Hello: {user?.email}</h1>
      <div className='todoBox'>
        <TodoApp user={user} />
        </div>
    </>
  )
}

export default Profile;