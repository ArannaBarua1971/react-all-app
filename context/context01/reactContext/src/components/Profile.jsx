import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} =useContext(UserContext)

    if(!user) return <p>Login please</p>

    
  return (

    <div>
      your name {user.name}
    </div>
  )
}

export default Profile
