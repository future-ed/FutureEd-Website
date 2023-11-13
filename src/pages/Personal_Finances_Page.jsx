import React from 'react'
import NavBar from '../components/Account/Navbar'
import PersonalFinances from '../components/Account/Personal_Finances'

const Personal_Finances_Page = () => {
    return (
        <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <PersonalFinances />
          </div>
        </div>
      )
}

export default Personal_Finances_Page
