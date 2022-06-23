import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'


const Home = () => {const [user, setUser] = useState({})
  
useEffect(() => {
  let unsubscribe = onAuthStateChanged(auth, (currentUser) =>
  {
    setUser(currentUser)
        })
  return () => unsubscribe()
}, [])
  return (
    <div>
      <h1>User Authentication</h1>
      Welcome: {user?.email } 
      </div>
  )
}

export default Home