import React from 'react'
import "./menu.css"

function Menu() {
  return (
    <div className='menDiv'>
        <ul className='menuUl'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Services</a></li>

        </ul>
    </div>
  )
}

export default Menu