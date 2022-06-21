import React from 'react'

const Profile = () => {

  const user=sessionStorage.getItem("email")
  return (
    <h1>Welcome: {user}</h1>
  )
}

export default Profile;