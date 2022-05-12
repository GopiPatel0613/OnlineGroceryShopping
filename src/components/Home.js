import React from 'react';
import {useNavigate } from 'react-router';
import './Home.css';




const Home = () => {
  const navigate = useNavigate()
    const handleScrollMenu=()=>{
        navigate('/Products')
       
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