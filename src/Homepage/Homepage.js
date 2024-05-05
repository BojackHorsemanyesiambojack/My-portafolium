import React from 'react'
import Presentation from './Presentation'
import Nav from './Nav'
import './Homepage.css'

function Homepage() {
  return (
    <div className='homepage'>
        <div className='aside'>
            <Nav />
        </div>
        <div class='main'>
            <Presentation />
        </div>
    </div>
  )
}

export default Homepage