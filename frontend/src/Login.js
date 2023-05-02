import React, { useState } from 'react'
import './Login.css'
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import validate from './LoginValidation';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    function hover(e) {
        const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl.fromTo(e.target, {scale: 1}, {scale: 1.1});
    }

    function lift(e) {
        const tl2 = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl2.to(e.target, {scale: 1});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
    }

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}));
    }

    return (
        <div className='page-container'>
            <h2 className='header'>UW Connect</h2>
            <form action = "" onSubmit={handleSubmit}>
                <div className='main-components'>
                    <div className='email-container'>
                        {errors.email && <span className='error-text'>{errors.email}</span>}
                        <input type='email' name='email' onChange={handleInput} placeholder='Email' autoComplete='off'/>
                    </div>
                    <div className='pwd-container'>
                        {errors.password && <span className='error-text'>{errors.password}</span>}
                        <input type='password' name='password' onChange={handleInput} placeholder='Password' autoComplete='off'/>
                    </div>
                    <div className='btn-container'>
                        <button className='btn1' type='submit' onMouseOver={hover} onMouseLeave={lift}>Login</button>
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
