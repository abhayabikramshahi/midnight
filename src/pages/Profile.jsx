import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Profile() {
    const navigate = useNavigate();

    const goToEditProfile = () => {
        navigate("/edit-profile")
    }
  return (
    <div>
        <h1>MidNight Profile</h1>
        <button onClick={goToEditProfile}>Edit Profile</button>
    </div>
  )
}

export default Profile