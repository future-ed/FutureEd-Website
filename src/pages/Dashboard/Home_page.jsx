import React from 'react'
import NavBar from '../../components/Account/Dashboard/Navbar'
import Home from '../../components/Account/Dashboard/Home_Page'

const Profile_page = () => {
  return (
    <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <Home />
          </div>
        </div>
  )
}

export default Profile_page
