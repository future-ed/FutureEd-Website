import React from 'react'
import Main from '../components/Account/Main'
import NavBar from '../components/Account/Navbar'


const Account_Main = () => {
  return (
    <div className="flex h-screen">
      <div className="NavBar">
        <NavBar />
      </div>
      <div className="main flex-grow">
        <Main />
      </div>
    </div>
  )
}

export default Account_Main
