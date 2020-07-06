import React from 'react'
import Header from '../components/Header'
import MainCaption from '../components/MainCaption';
import Divider from '../components/Divider';
import Highlights from '../components/Highlights';
import Footer from '../components/Footer';

function Home () {
    return (
        <React.Fragment>
            <Header />
            <MainCaption />
            <Divider />
            <Highlights />
            <Footer />
        </React.Fragment>
    )
}

export default Home;