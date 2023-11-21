import React from 'react'
import NavBar from '../../components/Account/Dashboard/Navbar'
import Health from '../../components/Account/Dashboard/Health'

const Health_page = () => {
    return (
        <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <Health />
          </div>
        </div>
      )
}

export default Health_page
