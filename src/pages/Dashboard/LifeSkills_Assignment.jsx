import React from 'react'
import Assignment from '../../components/Account/Dashboard/LifeSkills_Assignment';
import NavBar from '../../components/Account/Dashboard/Navbar';

const LifeSkills_Assignment = () => {
    return (
        <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow overflow-y-auto">
            <Assignment />
          </div>
        </div>
      )
}

export default LifeSkills_Assignment
