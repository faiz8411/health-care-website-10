import React from 'react';
import Schedule from '../Schedule/Schedule';
import Banner from './Banner/Banner';
import Doctors from './Doctors/Doctors';
import Footer from './Footer/Footer';

import Header from './Header/Header';
import Service from './Service/Service';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Services></Services>
            <Schedule></Schedule>
            <Doctors></Doctors>

        </div>
    );
};

export default Home;