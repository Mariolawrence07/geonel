import React from 'react'
import '../css/contact.css'

function ContactForm () {
    return (
        <div className='form-wrapper'>
            <div className='container form-container'>
                <div className='form-content-left'>
                    <h3 className='form-content-text1'>Geonel Head Office:</h3>
                    <p className='form-content-text2'>2602, 26th Floor,<br />Mazaya Business Avenue,<br />BB2, Jumeirah Lakes Towers,<br />Dubai, UAE.</p>
                    <button className='find-us-btn'>Find Us</button>
                </div>
                <div className='form-content-right'>
                    <form>
                        <div className='form-input-wrapper'>
                            <input id='name' type='text' placeholder='Name' required />
                        </div>
                        <div className='form-input-wrapper'>
                            <input id='email' type='email' placeholder='Your Email' required />
                        </div>
                        <div className='form-input-wrapper'>
                            <textarea id='textarea'  placeholder='Write us' required />
                        </div>
                        <div className='form-input-wrapper submit-btn-wrapper'>
                            <button type='submit' className='submit-btn'>Send to</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;