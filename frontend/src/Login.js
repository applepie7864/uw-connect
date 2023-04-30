import React from 'react'
import './Login.css'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';

function Login() {
    function hover(e) {
        const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl.fromTo(e.target, {scale: 1}, {scale: 1.1});
    }

    function lift(e) {
        const tl2 = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl2.to(e.target, {scale: 1});
    }

    return (
        <div className='page-container'>
            <h2 className='header'>UW Connect</h2>
            <form action = "">
                <div className='main-components'>
                    <div className='email-container'>
                        <label htmlFor='email'></label>
                        <input type='email' placeholder='Email'/>
                    </div>
                    <div className='pwd-container'>
                        <label htmlFor='password'></label>
                        <input type='password' placeholder='Password'/>
                    </div>
                    <div className='btn-container'>
                        <button className='btn1' onMouseOver={hover} onMouseLeave={lift}>Login</button>
                    </div>
                </div>
                <div className='side-components'>
                    <p>Don't have an account?</p>
                    <div className='btn2-container'>
                        <Link to="/signup" className='btn2'>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
