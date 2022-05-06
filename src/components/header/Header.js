import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Header.css'

export default function Header() {

    const Navigate = useNavigate();

    

    const signOutSubmitHandler = () => {
        localStorage.clear();
        Navigate('/');
    }


    const toggleDisplay = () => {
       const email = localStorage.getItem("loggedInUser")
       if(email){
           return(
               <div>
               <button onClick={signOutSubmitHandler}type='button'>Logout </button>
               <Link className="nav-link" to="/ShoppingCart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link> 
               </div> 
           )
    
    }
    else{
        return(
            <div>
            <Link className="nav-link" to="/Login">Login</Link>
                    
                    
            <Link className="nav-link" to="/SignUp">SignUp</Link>
            </div>
        )
        
    }

        
    }
    return (
        
        
        <header>
            <div className="mb-5">
                <nav className="NavbarItems">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"></a>
                        
                        <div className="NavbarItems">
               
                 <div id="main-nav-heading" className="navbar-logo">Express Online Grocery </div>
              
                 <div className="Products">
                            <Link className="nav-link active" aria-current="page" to="/Products">Products</Link>
                        </div>
                        <div className="Services">
                    <Link className="nav-link" to="/Services">Services</Link>
               </div>
                   <Link className="nav-link" to="/About Us">About Us</Link>
               
                  
                
                 {toggleDisplay()}
                    
               
               
                </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}


