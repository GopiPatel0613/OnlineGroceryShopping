import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {

    const Navigate = useNavigate();

    

    const signOutSubmitHandler = () => {
        localStorage.clear();
        Navigate('/Products');
    }


    const toggleDisplay = () => {
       const email = localStorage.getItem("loggedInUser")
       if(email){
           return(
               <div>
               <button className="btn logout nav-link" onClick={signOutSubmitHandler}type='button'>Logout </button>
               <Link className="nav-link" to="/ShoppingCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link> 
               </div> 
           )
    
    }
    else{
        return(
            <div className="loginSignup">
            <Link className="nav-link" to="/Login">Login</Link>
                    
                    
            <Link className="nav-link" to="/SignUp">SignUp</Link>
            </div>
        )
        
    }

        
    }
    return (
        
        
        <header className='header'>
                    
                    
                        
                        <div className="NavbarItems">
                        <a className="navbar-brand" href="/"> <img src={require("../images/logo.jpeg")}  className="Logo" alt="logo"  />     </a>
                  
               
                 
              
                    <div className="products">
                    <Link className="nav-link" aria-current="page" to="/Products">Products</Link>
                    </div>

                   <Link className="nav-link" to="/AboutUs">About Us</Link>
               
                  
                
                 {toggleDisplay()}
                    
               
               
                </div>
                    
                
        </header>
    )
}


