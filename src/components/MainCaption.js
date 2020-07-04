import React from 'react'
import '../css/caption.css'
import caption_img from '../images/main_caption_img.svg'

function MainCaption () {
    return (
        <div className='caption-wrapper'>
            <div className='container caption-container'>
                <div className='caption-text'>
                    <h1>We are the <span style={{color: "#A0B542"}}>builders</span><br />of the future</h1>
                </div>
                <div className='caption-img'>
                    <img src={caption_img} alt='' />
                </div>
            </div>
        </div>
    )
}

export default MainCaption;