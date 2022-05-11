import React from 'react';
import { Navigate } from 'react-router';
import './Home.css';




const Home = () => {
    const handleScrollMenu=()=>{
        Navigate('/Products')
        console.log("hello");
    }
return (
    
      <div className="homeContainer">
      
        <h1>Grocery At Your Doorstep!</h1>
        <p>High Quality Grocery & Food Products.</p>
        <p>Grocery Delivery In Minutes.</p>
        <button onClick={()=>handleScrollMenu()}>
          Shop Groceries Here <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
      
    
    

)}

export default Home;