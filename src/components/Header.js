import React from 'react'
import '../css/header.css'
import logo from '../images/new-logo.svg'
import logo_dark from '../images/logo_dark.svg'

function Header({dark}) {
    return (
        <div className='header'>
            <div className='container header-container'>
                <div className='header-left'>
                    <a href='/'>
                        {dark ? <img src={logo_dark} alt='' /> : <img src={logo} alt='' />}
                    </a>
                </div>
                <div className='header-right'>
                    <div className='link-wrapper'>
                        <a href='/about-us'>About Us</a>
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