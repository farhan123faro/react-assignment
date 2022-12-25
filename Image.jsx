import React from 'react'
import img from "./images/simple.jpg"
import "./image.css"

function Image() {
  return (
    <div>
        <img className='im' src={img} alt="" />
    </div>
  )
}

export default Image