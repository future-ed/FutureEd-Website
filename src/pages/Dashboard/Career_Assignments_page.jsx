import React from 'react'
import Assignment from '../../components/Account/Dashboard/Career_Assignments';
import NavBar from '../../components/Account/Dashboard/Navbar';

const Career_Assignments_page = () => {
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

export default Career_Assignments_page
