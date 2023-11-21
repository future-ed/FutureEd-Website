import React from 'react'
import NavBar from '../../components/Account/Dashboard/Navbar'
import IndependentLiving from '../../components/Account/Dashboard/Independent_Living'

const Independent_Living_page = () => {
    return (
        <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <IndependentLiving />
          </div>
        </div>
      )
}

export default Independent_Living_page
