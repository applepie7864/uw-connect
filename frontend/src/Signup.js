import React from 'react'
import './Signup.css'
import { gsap } from "gsap";
import { Link, useNavigate } from 'react-router-dom';
import videoBg from './whitebg-video.mp4'
import { useEffect} from 'react';
import validate from './SignupValidation';
import { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    })

    function hover(e) {
        const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl.fromTo(e.target, {scale: 1}, {scale: 1.1});
    }

    function lift(e) {
        const tl2 = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});
        tl2.to(e.target, {scale: 1});
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        if (errors.name == "" && errors.email == "" && errors.password == "" && errors.passwordConfirmation == "") {
            axios.post('http://localhost:8081/signup', values).then(res => navigate('/')).catch(err => console.log(err));
        }
    }

    const handleInput = (e) => {
        setValues(prev => ({...prev, [e.target.name]: [e.target.value]}));
    }

    useEffect(() => {
        const tl = gsap.timeline({defaults: {duration: 2, ease: "Power2.easeOut"}});
        const curve = document.querySelector('#curve');
        const path = document.querySelectorAll('#curve path');
        const pathLength = path[0].getTotalLength();
        gsap.set("#dot", { opacity: 0 });
        gsap.set(path[0], { strokeDashoffset: pathLength, strokeDasharray: pathLength });
        gsap.set(path[1], { strokeDashoffset: pathLength, strokeDasharray: pathLength });
        gsap.set("#c", { opacity: 0, y: 20 });
        gsap.set("#o", { opacity: 0, y: 20 });
        gsap.set("#n", { opacity: 0, y: 20 });
        gsap.set("#n_2", { opacity: 0, y: 20 });
        gsap.set("#e", { opacity: 0, y: 20 });
        gsap.set("#c_2", { opacity: 0, y: 20 });
        gsap.set("#stick", { scale: 0 });
        gsap.set("#uw", { opacity: 0 });
        gsap.set("#wave", { rotation: -10 });
        tl.to("#dot", { opacity: 1 });
        tl.fromTo(path[1], {strokeDashoffset: pathLength}, {strokeDashoffset: 0}, '<50%');
        tl.fromTo(path[0], {strokeDashoffset: pathLength}, {strokeDashoffset: 0}, '<50%');
        tl.to("#c", { opacity: 1, y: 0, duration: 0.5 }, '<30%');
        tl.to("#o", { opacity: 1, y: 0, duration: 0.5 }, '<50%');
        tl.to("#n", { opacity: 1, y: 0, duration: 0.5 }, '<50%');
        tl.to("#n_2", { opacity: 1, y: 0, duration: 0.5 }, '<50%');
        tl.to("#e", { opacity: 1, y: 0, duration: 0.5 }, '<50%');
        tl.to("#c_2", { opacity: 1, y: 0, duration: 0.5 }, '<50%');
        tl.fromTo("#stick", { scale: 0 }, { scale: 1, duration: 1, ease: "elastic.out(1, 0.8)" });
        tl.to("#uw", { opacity: 1, duration: 3, ease: "slow(0.7, 0.7, false)" });
        gsap.fromTo("#wave", { rotation: -10 }, { rotation: 10, duration: 1, repeat: -1, yoyo: true }, '<');
    }, [window]);
    return (
        <div className='main-container'>
        <div className='left-side'>
            <svg className="bw-logo" width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="220" fill="#1E1E1E"/>
    <path id="white-box" d="M0 0H220V220H0V0Z" fill="white"/>
    <g id="logo">
    <g id="uw">
    <path id="U" d="M82.7943 126.44C77.1109 126.44 72.8576 125.065 70.0343 122.315C67.2109 119.565 65.7993 115.257 65.7993 109.39V89.755L62.3893 88.985V85.135H80.1543V88.985L75.5343 89.81V110.16C75.5343 118.447 78.4126 122.59 84.1693 122.59C87.0293 122.59 89.1193 121.508 90.4393 119.345C91.7959 117.145 92.4743 114.12 92.4743 110.27V89.755L87.7443 88.985V85.135H102.044V88.985L98.4143 89.755V109.775C98.4143 115.495 97.0026 119.712 94.1793 122.425C91.3926 125.102 87.5976 126.44 82.7943 126.44Z" fill="black"/>
    <path id="W" d="M102.758 85.135H120.303V88.985L115.738 89.755L122.283 114.01L123.328 119.125L124.263 114.01L129.873 94.43L128.278 89.755L124.813 88.985V85.135H143.183V88.985L137.958 89.755L144.503 114.01L145.713 119.565L146.648 114.01L152.533 89.755L147.858 88.985V85.135H161.223V88.985L157.813 89.755L147.638 126.275H139.223L132.128 101.8L125.418 126.275H117.113L105.948 89.755L102.758 88.985V85.135Z" fill="black"/>
    </g>
    <g id="curve">
    <mask id="path-4-inside-1_0_1" fill="white">
    <path d="M51.2044 149.919C39.5563 133.795 34.7905 113.704 37.9555 94.0666C41.1204 74.4287 51.9568 56.8525 68.0808 45.2044C84.2048 33.5563 104.296 28.7905 123.933 31.9555C143.571 35.1204 161.147 45.9568 172.796 62.0807L168.375 65.2744C157.574 50.323 141.275 40.2746 123.066 37.3398C104.856 34.405 86.226 38.8243 71.2745 49.6253C56.323 60.4264 46.2746 76.7245 43.3398 94.9343C40.405 113.144 44.8242 131.774 55.6253 146.725L51.2044 149.919Z"/>
    </mask>
    <path d="M51.2044 149.919C39.5563 133.795 34.7905 113.704 37.9555 94.0666C41.1204 74.4287 51.9568 56.8525 68.0808 45.2044C84.2048 33.5563 104.296 28.7905 123.933 31.9555C143.571 35.1204 161.147 45.9568 172.796 62.0807L168.375 65.2744C157.574 50.323 141.275 40.2746 123.066 37.3398C104.856 34.405 86.226 38.8243 71.2745 49.6253C56.323 60.4264 46.2746 76.7245 43.3398 94.9343C40.405 113.144 44.8242 131.774 55.6253 146.725L51.2044 149.919Z" stroke="black" stroke-width="10" mask="url(#path-4-inside-1_0_1)"/>
    </g>
    <circle id="dot" cx="169" cy="61" r="5" fill="black"/>
    <g id="lowercase">
    <path id="c" d="M57.9545 158.5C57.9545 157.353 58.1811 156.333 58.6345 155.44C59.1011 154.547 59.7611 153.853 60.6145 153.36C61.4811 152.853 62.4878 152.6 63.6345 152.6C64.1678 152.6 64.6278 152.64 65.0145 152.72C65.4011 152.8 65.8345 152.907 66.3145 153.04L66.8945 153.2L66.7745 156.62H65.0345L64.5345 154.42C64.4545 154.073 64.0611 153.9 63.3545 153.9C62.6078 153.9 62.0211 154.227 61.5945 154.88C61.1811 155.533 60.9678 156.553 60.9545 157.94C60.9545 159.407 61.2078 160.533 61.7145 161.32C62.2211 162.093 62.8945 162.48 63.7345 162.48C64.7478 162.48 65.6811 162.207 66.5345 161.66L66.9945 162.7C66.6478 163.073 66.1145 163.42 65.3945 163.74C64.6878 164.06 63.9211 164.22 63.0945 164.22C61.3878 164.22 60.1011 163.693 59.2345 162.64C58.3811 161.587 57.9545 160.207 57.9545 158.5Z" fill="black"/>
    <path id="o" d="M73.1109 167.46C73.1109 166.207 73.3576 165.14 73.8509 164.26C74.3576 163.38 75.0309 162.72 75.8709 162.28C76.7109 161.827 77.6243 161.6 78.6109 161.6C80.2909 161.6 81.5843 162.12 82.4909 163.16C83.4109 164.187 83.8709 165.587 83.8709 167.36C83.8709 168.627 83.6176 169.707 83.1109 170.6C82.6176 171.48 81.9509 172.14 81.1109 172.58C80.2843 173.007 79.3709 173.22 78.3709 173.22C76.7043 173.22 75.4109 172.707 74.4909 171.68C73.5709 170.64 73.1109 169.233 73.1109 167.46ZM78.5309 171.92C80.0376 171.92 80.7909 170.467 80.7909 167.56C80.7909 166.04 80.6109 164.887 80.2509 164.1C79.8909 163.3 79.3043 162.9 78.4909 162.9C76.9443 162.9 76.1709 164.353 76.1709 167.26C76.1709 168.78 76.3576 169.94 76.7309 170.74C77.1176 171.527 77.7176 171.92 78.5309 171.92Z" fill="black"/>
    <path id="n" d="M87.7134 169.78L86.4334 169.42V168.04L89.7534 167.62H89.8134L90.3134 168.02V168.8L90.2934 169.28C90.76 168.84 91.3667 168.46 92.1134 168.14C92.86 167.82 93.6134 167.66 94.3734 167.66C95.1867 167.66 95.82 167.813 96.2734 168.12C96.74 168.413 97.0734 168.88 97.2734 169.52C97.4734 170.16 97.5734 171.027 97.5734 172.12V177.64L98.7934 177.8V179H93.6334V177.8L94.7134 177.64V172.12C94.7134 171.427 94.6667 170.887 94.5734 170.5C94.48 170.1 94.3067 169.813 94.0534 169.64C93.8134 169.453 93.4667 169.36 93.0134 169.36C92.2534 169.36 91.44 169.687 90.5734 170.34V177.62L91.7734 177.8V179H86.5534V177.8L87.7134 177.62V169.78Z" fill="black"/>
    <path id="n_2" d="M105.713 171.78L104.433 171.42V170.04L107.753 169.62H107.813L108.313 170.02V170.8L108.293 171.28C108.76 170.84 109.367 170.46 110.113 170.14C110.86 169.82 111.613 169.66 112.373 169.66C113.187 169.66 113.82 169.813 114.273 170.12C114.74 170.413 115.073 170.88 115.273 171.52C115.473 172.16 115.573 173.027 115.573 174.12V179.64L116.793 179.8V181H111.633V179.8L112.713 179.64V174.12C112.713 173.427 112.667 172.887 112.573 172.5C112.48 172.1 112.307 171.813 112.053 171.64C111.813 171.453 111.467 171.36 111.013 171.36C110.253 171.36 109.44 171.687 108.573 172.34V179.62L109.773 179.8V181H104.553V179.8L105.713 179.62V171.78Z" fill="black"/>
    <path id="e" d="M128.942 179.22C127.182 179.22 125.869 178.707 125.002 177.68C124.149 176.64 123.722 175.227 123.722 173.44C123.722 172.24 123.942 171.2 124.382 170.32C124.835 169.44 125.469 168.767 126.282 168.3C127.095 167.833 128.035 167.6 129.102 167.6C130.435 167.6 131.462 167.953 132.182 168.66C132.902 169.353 133.275 170.347 133.302 171.64C133.302 172.52 133.249 173.173 133.142 173.6H126.642C126.695 174.813 126.982 175.76 127.502 176.44C128.022 177.107 128.762 177.44 129.722 177.44C130.242 177.44 130.775 177.353 131.322 177.18C131.882 177.007 132.322 176.8 132.642 176.56L133.142 177.66C132.782 178.047 132.195 178.407 131.382 178.74C130.582 179.06 129.769 179.22 128.942 179.22ZM130.502 172.4C130.529 172.027 130.542 171.74 130.542 171.54C130.542 169.767 129.949 168.88 128.762 168.88C128.109 168.88 127.602 169.14 127.242 169.66C126.882 170.18 126.682 171.093 126.642 172.4H130.502Z" fill="black"/>
    <path id="c_2" d="M139.954 167.5C139.954 166.353 140.181 165.333 140.634 164.44C141.101 163.547 141.761 162.853 142.614 162.36C143.481 161.853 144.488 161.6 145.634 161.6C146.168 161.6 146.628 161.64 147.014 161.72C147.401 161.8 147.834 161.907 148.314 162.04L148.894 162.2L148.774 165.62H147.034L146.534 163.42C146.454 163.073 146.061 162.9 145.354 162.9C144.608 162.9 144.021 163.227 143.594 163.88C143.181 164.533 142.968 165.553 142.954 166.94C142.954 168.407 143.208 169.533 143.714 170.32C144.221 171.093 144.894 171.48 145.734 171.48C146.748 171.48 147.681 171.207 148.534 170.66L148.994 171.7C148.648 172.073 148.114 172.42 147.394 172.74C146.688 173.06 145.921 173.22 145.094 173.22C143.388 173.22 142.101 172.693 141.234 171.64C140.381 170.587 139.954 169.207 139.954 167.5Z" fill="black"/>
    </g>
    <g id="stick">
    <circle id="Ellipse 3" cx="164" cy="148" r="3.5" fill="black" stroke="black"/>
    <path id="Line 3 (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M159.453 172.542C158.975 172.266 158.811 171.654 159.087 171.176L161.198 167.521L163.308 163.866C163.584 163.388 164.196 163.224 164.674 163.5C165.152 163.776 165.316 164.388 165.04 164.866L160.82 172.176C160.543 172.654 159.932 172.818 159.453 172.542Z" fill="black" stroke="black"/>
    <path id="wave" fill-rule="evenodd" clip-rule="evenodd" d="M163.5 157.674C163.224 157.196 163.388 156.584 163.866 156.308L168.72 153.505L173.575 150.703C174.053 150.427 174.664 150.59 174.941 151.069C175.217 151.547 175.053 152.159 174.575 152.435L164.866 158.04C164.388 158.316 163.776 158.152 163.5 157.674Z" fill="black" stroke="black"/>
    <path id="Line 3 (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M164 151C164.552 151 165 151.448 165 152V164C165 164.552 164.552 165 164 165C163.448 165 163 164.552 163 164V152C163 151.448 163.448 151 164 151Z" fill="black" stroke="black"/>
    <path id="not-wave" fill-rule="evenodd" clip-rule="evenodd" d="M173.45 169.611C173.174 170.089 172.563 170.253 172.084 169.977L163.866 165.232C163.388 164.956 163.224 164.344 163.5 163.866C163.776 163.388 164.388 163.224 164.866 163.5L173.084 168.245C173.563 168.521 173.726 169.133 173.45 169.611Z" fill="black" stroke="black"/>
    <path id="Line 3 (Stroke)_5" fill-rule="evenodd" clip-rule="evenodd" d="M163.803 157.019C163.614 157.538 163.041 157.806 162.522 157.617L155.94 155.221C155.421 155.033 155.153 154.459 155.342 153.94C155.531 153.421 156.105 153.153 156.624 153.342L163.206 155.738C163.725 155.927 163.992 156.5 163.803 157.019Z" fill="black" stroke="black"/>
    </g>
    </g>
            </svg>
        </div>
        <div className="right-side">
            <div className='text-container'>
                <div className='slogan'>Creating new avenues for connection.</div>
                <div className='more-texr'>Sign up today.</div>
            </div>
            <form className="form" action = "" onSubmit={handleSubmit}>
                <div className='main-components2'>
                    <div className='name-container2'>
                        {errors.name && <span className='error-text2'>{errors.name}</span>}
                        <input type='text' onChange={handleInput} placeholder='Name' name='name' autoComplete='off'/>
                    </div>
                    <div className='email-container2'>
                        {errors.email && <span className='error-text2'>{errors.email}</span>}
                        <input type='email' onChange={handleInput} placeholder='Email' name='email' autoComplete='off'/>
                    </div>
                    <div className='pwd-container2'>
                        {errors.password && <span className='error-text2'>{errors.password}</span>}
                        <input type='password' onChange={handleInput} placeholder='Password' name='password' autoComplete='off'/>
                    </div>
                    <div className='pwd-confirmation-container2'>
                        {errors.passwordConfirmation && <span className='error-text2'>{errors.passwordConfirmation}</span>}
                        <input type='password' onChange={handleInput} placeholder='Confirm Password' name='passwordConfirmation' autoComplete='off'/>
                    </div>
                    <div className='btn-container'>
                        <button className='button1' type='submit' onMouseOver={hover} onMouseLeave={lift}>Sign Up</button>
                    </div>
                </div>
                <div className='side-components2'>
                    <p className='question'>Already have an account?</p>
                    <div className='button2-container'>
                        <Link to="/uw-connect" className='btn2'>Login</Link>
                    </div>
                </div>
            </form>
        </div>
        <video id="intro-video" src={videoBg} autoPlay muted loop ></video>
        </div>
    )
}

export default Signup
