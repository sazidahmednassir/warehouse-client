import React from 'react';
import Banner from '../Banner/Banner';
import Email from '../Email/Email';
import Servicecards from '../Servicecards/Servicecards';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servicecards   ></Servicecards>
            <Email></Email>
         

        </div>
    );
};

export default Home;