import React from 'react';
import Assignment from '../../components/Account/Dashboard/Finance_assignments';
import NavBar from '../../components/Account/Dashboard/Navbar';

const Assignments_page = () => {
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

export default Assignments_page;
