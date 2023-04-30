import React from 'react'
import './Signup.css'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import videoBg from './whitebg-video.mp4'

function Signup() {
    return (
        <div className='main-container'>
        <div className='left-side'>

        </div>
        <div className="right-side">

        </div>
        <video id="intro-video" src={videoBg} autoPlay muted loop ></video>
        </div>
    )
}

export default Signup
