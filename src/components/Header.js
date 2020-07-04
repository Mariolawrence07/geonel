import React from 'react'
import '../css/header.css'
import logo from '../images/new-logo.svg'

function Header() {
    return (
        <div className='header'>
            <div className='container header-container'>
                <div className='header-left'>
                    <a href='/'>
                        <img src={logo} alt='' />
                    </a>
                </div>
                <div className='header-right'>
                    <div className='link-wrapper'>
                        <a href='/'>About Us</a>
                    </div>
                    <div className='link-wrapper'>
                        <a href='/subsidiaries'>Subsidiaries</a>
                    </div>
                    <div className='link-wrapper'>
                        <a href='/contact-us'>Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;