import React from 'react'
import '../css/highlights.css'
import h_two from '../images/Asset 3.svg'
import commitment from '../images/commitment.svg'
import integrity from '../images/integrity.svg'
import accountability from '../images/accountability.svg'
import excellence from '../images/excellence.svg'
import innovation from '../images/innovation.svg'
import customer_focus from '../images/customer_focus.svg'
import diligence from '../images/diligence.svg'
import logo from '../images/new-logo.svg'
import core from '../images/core.svg'

function Highlights () {
    return (
        <div className='highlights-wrapper'>
            <div className='container highlights-container'>
                <div className='highlight-one'>
                    <div className='globe'>
                        <img src={commitment} alt='' className='commitment' />
                        <img src={integrity} alt='' className='integrity' />
                        <img src={accountability} alt='' className='accountability' />
                        <img src={excellence} alt='' className='excellence' />
                        <img src={innovation} alt='' className='innovation' />
                        <img src={customer_focus} alt='' className='customer-focus' />
                        <img src={diligence} alt='' className='diligence' />
                        <img src={core} alt='' className='core-main' />
                        <span className='line-diligence'>...............</span>
                        <span className='line-commitment'>...............</span>
                        <span className='line-integrity'>...............</span>
                        <span className='line-accountability'>...............</span>
                        <span className='line-excellence'>...............</span>
                        <span className='line-innovation'>...............</span>
                        <span className='line-customer-focus'>...............</span>
                        <a href='/'>
                            <img src={logo} alt='' className='core-logo' />
                        </a>
                    </div>
                </div>
                <div className='highlight-two'>
                    <img src={h_two} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Highlights;