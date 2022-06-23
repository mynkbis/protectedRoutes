import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'

const Profile = () => {
  const [user, setUser] = useState({})
  
useEffect(() => {
  let unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  {
    setUser(currentUser)
        })
  return () => unsubscribe()
}, [])

  // const user=sessionStorage.getItem("email")
  return (
    // <h1>Welcome: {user}</h1>
    <h1>Hello: {user?.email }</h1>
  )
}

export default Profile;