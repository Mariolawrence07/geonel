import React, { useState, useEffect } from 'react'
import '../css/contact.css'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

function Contact () {
    const [theme, setTheme] = useState('theme-light');
    var date = new Date();
    var timestamp = Date.parse(date);
    const timeOfDay = date.getHours(parseInt(timestamp));

    useEffect(() => {
        if (timeOfDay > 18) {
            setTheme('theme-dark')
        } else {
            setTheme('theme-light')
        }
    })
    

    return (
        <div className={`contact-wrapper ${theme}`}>
            <Header dark={theme === 'theme-dark' ? true : false} />
            <ContactForm />
        </div>
    )
}

export default Contact;