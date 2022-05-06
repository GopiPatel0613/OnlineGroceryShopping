import React, { useState } from "react";
import Products from './Products';
import { useNavigate } from 'react-router-dom';
import axios from "axios";



const ShoppingCart=()=>{
  const Navigate = useNavigate();
  let [cart, setcart] = useState({
    userEmail: '',
    productImage: '',
    quantity: '',
    price: '',
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
      
   }).catch((error) => {
       console.log(error);         })
}
return (
  cartSubmitHandler(),
   <form className="row g-3">
       <h2> ShoppingCart!!!</h2>
                   <div className="col-md-6">
            <label htmlFor="inputpPhoto" className="form-label">ProductImage</label>
           <input name="pPhoto" value={cart.p} onChange={cartChangeHandler} type="image" className="form-control" id="inputproductImage" />
       </div>
       
       
        <div className="d-grid gap-2 ">
            <button onClick={cartSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Submit</button>
        </div>
    </form>
)
}
export default ShoppingCart