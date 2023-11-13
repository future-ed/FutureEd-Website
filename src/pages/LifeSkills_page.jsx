import React from 'react'
import NavBar from '../components/Account/Navbar'
import LifeSkills from '../components/Account/LifeSkills'

const LifeSkills_page = () => {
    return (
        <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <LifeSkills />
          </div>
        </div>
      )
}

export default LifeSkills_page
