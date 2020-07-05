import React from 'react';
import '../css/footer.css';
import kc from '../images/kc.svg';
import hc from '../images/hc.svg';
import emperor from '../images/emperor.svg';
import gwi from '../images/gwi.svg';
import skyview from '../images/skyview.svg';
import gtesc from '../images/gtesc.svg';
import ar from '../images/ar.svg';
import gears from '../images/gears.svg';
import imperial from '../images/imperial.svg';
import footer_logo from '../images/footer_logo.svg'
import footer_cash from '../images/footer_cash.svg'

function Footer () {
    return (
        <div className='footer-wrapper'>
            <div className='container'>
                <div className='footer-content-left'>
                    <h3>The need of<br />working with us</h3>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <p>ipsumlorem ipsumlorem ipsumlorem </p>
                    <button className='view-gallery'>View gallery</button>
                </div>
                <div className='footer-content-right'>
                    <div className='brand-wrapper'>
                        <p>Kineto Consults</p>
                        <img src={kc} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>Heritage City</p>
                        <img src={hc} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>Emperor Integrated Farms and Projects</p>
                        <img src={emperor} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>GWI Metallurgy and Engineering</p>
                        <img src={gwi} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>Skyview Aerial Solutions Limited</p>
                        <img src={skyview} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>AR Security and Solutions</p>
                        <img src={ar} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>GTESC Limited</p>
                        <img src={gtesc} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>Gears Energy Limited</p>
                        <img src={gears} alt='' />
                    </div>
                    <div className='brand-wrapper'>
                        <p>Imperial Pheonix Consulting Limited</p>
                        <img src={imperial} alt='' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='footer-bottom'>
                    <div className='footer-bottom-left'>
                        <img src={footer_logo} alt='' />
                    </div>
                    <div className='footer-bottom-left'>
                        <img src={footer_cash} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;