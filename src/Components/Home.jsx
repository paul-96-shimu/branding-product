import React from 'react';
import Banner from './Banner';
import Service from './Service';
import MyLatest from './MyLatest';
import Experience from './Experience';
import Performance from './Performance';
import Instagram from './Instagram';
import Footer from './Footer';
import Protal from './Protal';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <MyLatest></MyLatest>
            <Experience></Experience>
            <Protal></Protal>
            
            <Performance></Performance>
            <Instagram></Instagram>
            <Footer></Footer>


        </div>
    );
};

export default Home;