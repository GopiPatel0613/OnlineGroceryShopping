import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ThankYou from './components/Thankyou/Thankyou';
import AboutUs from './components/AboutUs';
import shoppingcart from './components/shoppingcart';
import Services from './components/Services';

function App(){
  return(
    <Router>
    <div classname="App">
    <Navbar/>
    <Routes>
      <Route exact path="/SignUp" element={<SignUp />}/>
      <Route exact path="/Products" element={<Products />}/> 
      <Route exact path="/Login" element={<Login />}/> 
      <Route exact path="/Thankyou" element={<ThankYou />}/> 
      <Route exact path="/AboutUs" element={<AboutUs />}/> 
      <Route exact path="/shoppingcart" element={<shoppingcart/>}/>
      <Route exact path="/Services" element={<Services />}/> 
    </Routes>
 
    </div>
    </Router>
    

  );

}
export default App;
