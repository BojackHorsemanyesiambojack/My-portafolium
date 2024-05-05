import React from 'react'
import './Nav.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from './Assets/mylogo.jpg'

function Nav() {
  return (
    <div className='nav' id='nav'>
        <div className='display-nav'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <div className='buttons'>
            <div className='button-link'>
                <a href='#About'><span>About me</span></a>
            </div>
            <div className='button-link'>
                <a href='#Skills'><span>Skills</span></a>
            </div>
            <div className='button-link'>
                <a href='#Projects'><span>My Projects</span></a>
            </div>
            <div className='button-link'>
                <a href='#Contact'><span>Contact me</span></a>
            </div>
            </div>
            <div className='socials'>
                <div className='icon'>
                    <a href='https://github.com/BojackHorsemanyesiambojack'><GitHubIcon /></a>
                </div>
                <div className='icon'>
                    <a href='https://www.linkedin.com/in/johandry-luna-8310022a5/'><LinkedInIcon /></a>
                </div>
                
            </div>
        </div>

    </div>

  )
}

export default Nav