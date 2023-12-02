import React from 'react'
import NavBar from '../../components/Account/Dashboard/Navbar'
import Profile from '../../components/Account/Dashboard/Profile'

const Profile_page = () => {
  return (
    <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <Profile />
          </div>
        </div>
  )
}

export default Profile_page
