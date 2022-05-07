import React, { useState } from "react";
import Products from './Products';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const shoppingCart=()=>{
  const Navigate = useNavigate();
  let [cart, setcart] = useState({
    userEmail: '',
    productImage: '',
    productName: '',
    quantity: '',
    productPrice: '',
    total:'',
  })
const cartChangeHandler = (event) => {
   const name = event.target.name;         
   const value = event.target.value;
   const tempUser = { ...cart};
   tempUser[name] = value;
 
 setcart(tempUser);
  
}
let email = localStorage.getItem("loggedInUser");
const cartSubmitHandler = () => {
   axios.get("http://localhost:8080/getCart", { params: { email: email } }).then((response) => {
    console.log(cart);
   }).catch((error) => {
       console.log(error);         })
}
return (
  cartSubmitHandler(),
   <form className="row g-3">
       <h2> ShoppingCart!!!</h2>
       <div className="product-info">
                <p className="Products-name">{Products.pName}</p>
                <p className="product-price">{Products.price}</p>
            
           
      </div>
    </form>
    
)
}
export default shoppingCart;