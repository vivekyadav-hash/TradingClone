import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignUpPage from './landing_page/signup/SignUpPage';
import AboutPage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Navbar/>

<Routes>
  <Route path='/' element={<HomePage/>}></Route>
  <Route path='/Signup' element={<SignUpPage/>}></Route>
  <Route path='/About' element={<AboutPage/>}></Route>
  <Route path='/Product' element={<ProductPage/>}></Route>
  <Route path='/Pricing' element={<PricingPage/>}></Route>
  <Route path='/Support' element={<SupportPage/>}></Route>
  <Route path='*' element ={<NotFound/>}></Route>
  </Routes>
 
  <Footer/>
  </BrowserRouter>
);


