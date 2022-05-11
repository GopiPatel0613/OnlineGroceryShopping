import React from 'react';
import { Navigate } from 'react-router';

import homebanner from './images/homebanner.png';


const Home = () => {
    const handleScrollMenu=()=>{
        Navigate('/Products')
        console.log("hello");
    }
return (
    
      <div className='content-main'>
        <h1>Grocery At Your Doorstep!</h1>
        <p>High Quality Grocery & Food Products.</p>
        <p>.</p>
        <button onClick={()=>handleScrollMenu()}>
          View and Shop Available Groceries <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    
    

)}

export default Home;