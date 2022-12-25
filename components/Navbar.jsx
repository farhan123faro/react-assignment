import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Notification from './Notification'
import './navbar.css'
function Navbar() {
  return (
    <div className='navDiv'>
      <Logo/>
    <Menu/>
    <Notification/>
    </div>
    
    
  )
}

export default Navbar