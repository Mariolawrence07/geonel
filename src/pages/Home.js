import React from 'react'
import Header from '../components/Header'
import MainCaption from '../components/MainCaption';
import Divider from '../components/Divider';
import Highlights from '../components/Highlights';

function Home () {
    return (
        <React.Fragment>
            <Header />
            <MainCaption />
            <Divider />
            <Highlights />
        </React.Fragment>
    )
}

export default Home;