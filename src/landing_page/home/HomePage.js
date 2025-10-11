import React from 'react';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';
import Hero from './Hero';
import Pricing from './Pricing';
import Education from './Education';
import Navbar from '../Navbar';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
     
        <Hero/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
   
        
        </>
     );
}

export default HomePage;