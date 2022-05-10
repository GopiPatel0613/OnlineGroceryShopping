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
import Services from './components/Services';
import Header from './components/header/Header';
import background from './components/images/background.jpeg';
import './App.css'






function App(){
  return(
  
    
    <Router>
       
     
        
      
    <div className="App">
   
    
      <div>
    <Header/>
   
    <Routes>
   
   
      <Route exact path="/Checkout" element={<Checkout />}/>
      <Route exact path="/SignUp" element={<SignUp />}/>
      <Route exact path="/Products" element={<Products />}/> 
      <Route exact path="/Login" element={<Login />}/> 
      <Route exact path="/Thankyou" element={<ThankYou />}/> 
      <Route exact path="/AboutUs" element={<AboutUs />}/> 
      <Route exact path="/ShoppingCart" element={<ShoppingCart/>}/>
      <Route exact path="/Services" element={<Services />}/> 
     
  
    </Routes>
    
    </div>
 
    </div>
    
  
    </Router>
    
  );

}
export default App;
