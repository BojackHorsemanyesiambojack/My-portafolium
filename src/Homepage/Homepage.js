import React from 'react'
import Presentation from './Presentation'
import Nav from './Nav'
import './Homepage.css'
import MenuIcon from '@mui/icons-material/Menu';

var navCheck;

const openNav = () => {
  if(document.getElementById('nav-cont')){
    let nav = document.getElementById('nav-cont');
    if(nav.style.display === 'none'){
    nav.style.display = 'flex';
    navCheck = true;
    }else{
      nav.style.display = 'none'
    }
  }
}

const checkNavSize = () => {
  if (document.getElementById ('nav-cont')){
    let nav = document.getElementById ('nav-cont');
    if (window.innerWidth >= 1100){
      navCheck = false;
      nav.style.display = 'flex';
    }
    else if (window.innerWidth<1100 && !navCheck){
      nav.style.display = 'none'
    }
  }
}

function Homepage() {
  return(
    <div className='homepage'>
      <div className='menu-icon' onClick={openNav}>
          <MenuIcon fontSize='large'/>
          </div>
        <div className='aside'>
          <div id='nav-cont'>
          <Nav />
          </div>
        </div>
        <div class='main'>
            <Presentation />
        </div>
    </div>
  )
}

window.addEventListener('resize',checkNavSize)

export default Homepage