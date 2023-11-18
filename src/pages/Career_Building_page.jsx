import React from 'react'
import NavBar from '../components/Account/Navbar'
import CareerBuilding from '../components/Account/Career_Building'

const Career_Building_page = () => {
    return (
        <div className="flex h-screen">
              <div className="NavBar">
                <NavBar />
              </div>
              <div className="main flex-grow">
                <CareerBuilding />
              </div>
            </div>
      )
}

export default Career_Building_page
