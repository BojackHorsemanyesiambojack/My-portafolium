import React from 'react'
import './Presentation.css'

import ProgressBar from "@ramonak/react-progress-bar";
import instagramCloneMedia from './Assets/project_media/Instagram_project.jpg';
import moonLibrary from './Assets/project_media/moon_library_project.jpg'
import { Button, colors } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { blue } from '@mui/material/colors';
import { FaPython } from "react-icons/fa";

function Presentation() {
  return (
    
    <div className='presentation'>
        <div className='general-display'>
        <div className='page-presentation' id='About'>
          <div className='presentation-title'>
          <div class='hi'>
          <h1>Hi, i'm Johandry Luna</h1>
          <h2>i'm a frontend developer</h2>
          </div>
          <div className='image-me'>
          <img src='https://innostudio.de/fileuploader/images/default-avatar.png'/>
          </div>
        </div>
        <div className='page-text-box'>
          <h2>About me</h2>
          <p>I'm a 18 years old frontend developer from nicaragua, i usually speak spanish,
            but i learned a lot of english on a course when i was 10 years old
             I learned to program when I was 16 years old and created some basic games in scratch
              and very basic structures and pages in HTML,
              then I started to learn more technologies such as C++,
               SQL, Python and my favorites: React and C#.
               
          </p>
          <p className='page-text-box'>
            <p>One of my first projects was a simple website where a my sql database
               was rendered using Python and FastApi,
                this website gave the option to delete,
                 add and edit data, another of my first projects was a small static
                  clone of Instagram where you can come in and make a post</p>
          </p>
        </div>
    </div>
    <div className='page-presentation' id='Skills'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      <div className='skills-show'>
        <div className='row'>
        <div className='element'>
          <h2>C#</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={60}/>
        </div>
        <div className='element'>
          <h2>Javascript</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={80}/>
        </div>
        <div className='element'>
          <h2>HTML</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={100}/>
        </div>
        <div className='element'>
          <h2>Css</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={90}/>
        </div>
        </div>
        <div className='row'>
        <div className='element'>
          <h2>SQL</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={75}/>
        </div>
        <div className='element'>
          <h2>C++</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={30}/>
        </div>
        <div className='element'>
          <h2>React</h2>
        <ProgressBar bgColor='green' baseBgColor='gray' completed={80}/>
        <p>This page was made with React</p>
        </div>
        </div>
      </div>
    </div>
    <div className='page-presentation' id='Projects'>
      <div className='title'>
        <h1>My projects</h1>
        <div className='project-show'>
          <div className='row'>
            <div className='element'>
              <div className='image'>
              <span><h3 className='dash'>Instagram static clone</h3></span>
              <div className='imgsour'>
              <img src={instagramCloneMedia}/>
              </div>
              <div className='image-desc'>
                <span>A little instagram clone</span>
              </div>
                <footer className='image-footer'><FaReact className='lang-icon' id='react'/></footer>
                <a href='https://BojackHorsemanyesiambojack.github.io/Instagram-clone'><button className='look-but'>Take a look</button></a>
              </div>
            </div>
            <div className='element'>
              <div className='image'>
              <span><h3 className='dash'>Moon's library</h3></span>
              <div className='imgsour'>
              <img src={moonLibrary}/>
              </div>
              <div className='image-desc'>
                <span>A library's web with a python backend created with FastApi</span>
              </div>
                <footer className='image-footer'>
                  <FaReact className='lang-icon' id='react'/>
                  <FaPython className='lang-icon' id='python'/>
                  </footer>
                <a href='https://BojackHorsemanyesiambojack.github.io/Instagram-clone'><button className='look-but'>Take a look</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='contact-me page-presentation' id='Contact'>
      <div className='title'>
        <h1>Contact me</h1>
      </div>
      <div className='contact-form'>
        <form className='contact' action='Post'>
          <div className='input_cont'>
          </div>
          
        </form>
      </div>
    </div>
    <footer>
      
    </footer>
  </div>
  </div>
  )
}

export default Presentation