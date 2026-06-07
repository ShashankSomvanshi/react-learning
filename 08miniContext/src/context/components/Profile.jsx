import React,{useState,useContext} from 'react'
import UserContext from '../UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) {
    return <h1>Please login to see your profile</h1>
  }
  else {

    return (
      <div>
        <h1>Profile</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    )
  }


  
}

export default Profile