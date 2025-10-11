import React from 'react';
import OpenAccount from '../OpenAccount';
import Benefits from "./Benefits";
import SignUp from "./SignUp";
import InvestmentSec from "./InvestmentSec";
import FAndQ from "./FAndQ";
import SteptoOpen from "./SteptoOpen";
import Explore from "./Explore";
import Navbar from '../Navbar';
import Footer from '../Footer';


function SignUpPage() {
    return ( 
        <>

       
        <SignUp/>
        <InvestmentSec/>
        <SteptoOpen/>
        <Benefits/>
        <Explore/>
        <FAndQ/>
        <OpenAccount/>
      
        
        </>
     );
}

export default SignUpPage;