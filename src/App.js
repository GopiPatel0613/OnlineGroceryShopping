import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Products from "./components/Products";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ThankYou from './components/Thankyou/Thankyou';
import AboutUs from './components/AboutUs';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import Header from './components/header/Header';
import './App.css'
import Home from './components/Home';






function App(){
  return(
  
    
    <Router>
       
     
        
      
    <div className="App main-container" >
    
    <Header/>
   
    <Routes>
   
      <Route exact path="/" element={<Home />}/> 
      <Route exact path="/Checkout" element={<Checkout />}/>
      <Route exact path="/SignUp" element={<SignUp />}/>
      <Route exact path="/Products" element={<Products />}/> 
      <Route exact path="/Login" element={<Login />}/> 
      <Route exact path="/Thankyou" element={<ThankYou />}/> 
      <Route exact path="/AboutUs" element={<AboutUs />}/> 
      <Route exact path="/ShoppingCart" element={<ShoppingCart/>}/>
     
  
    </Routes>
 
    </div>
    
  
    </Router>
    
  );

}
export default App;
