import React from 'react'
import NavBar from '../components/Account/Navbar'
import Taxes from '../components/Account/Taxes'

const Taxes_page = () => {
  return (
    <div className="flex h-screen">
          <div className="NavBar">
            <NavBar />
          </div>
          <div className="main flex-grow">
            <Taxes />
          </div>
        </div>
  )
}

export default Taxes_page
