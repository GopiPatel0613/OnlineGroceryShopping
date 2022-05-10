import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import './ShoppingCart.css';
import { Navigate } from 'react-router';

const ShoppingCart=()=>{
  let [cart, setcart] = useState({
   cartArray: []
  })
  let [cartTotal, setcartTotal] = useState({
    cartTotal: '',
  })

let email = localStorage.getItem("loggedInUser");

const cartSubmitHandler = () => {
  if(cart.cartArray.length===0){
    axios.get("http://localhost:8080/getCart", { params: { email: email } }).then((response) => {
      setcart({cartArray: response.data})
     }).catch((error) => {
         console.log(error);         })
  }
}
const getCartTotal = () => {
  if(cartTotal.cartTotal===''){
    axios.get("http://localhost:8080/getCartTotal", { params: { email: email } }).then((response) => {
    cartTotal = response.data;
    setcartTotal({cartTotal: response.data.toFixed(2)})
   }).catch((error) => {
       console.log(error);         })
  }
   
}
const deleteProductFromCart=(productDetails)=>{
  axios.delete("http://localhost:8080/deleteCartProduct", { params: { id: productDetails.cId } }).then((response) => {
    cartSubmitHandler();
    getCartTotal();
    window.location.reload(true);
   }).catch((error) => {
       console.log(error);         })
}

const checkoutHandler = ()=>{
  axios.put("http://localhost:8080/updateCart", cart.cartArray).then((response) => {
    //Navigate('/Checkout');
   }).catch((error) => {
       console.log(error);         })
}

const decreaseQty = (cartId) =>{
  let cartUpdate = cart.cartArray;
  let cartTotalUpdate = cartTotal.cartTotal;
  if(cartUpdate[cartId-1].quantity!==0){
    cartUpdate[cartId-1].quantity = cartUpdate[cartId-1].quantity-1;
    cartUpdate[cartId-1].productTotal = (cartUpdate[cartId-1].productTotal-cartUpdate[cartId-1].productPrice);
    cartTotalUpdate = parseFloat(cartTotalUpdate) - parseFloat(cartUpdate[cartId-1].productPrice);
    cartTotalUpdate = cartTotalUpdate.toFixed(2);
  }
  setcart({cartArray: cartUpdate})
  setcartTotal({cartTotal: cartTotalUpdate})
}

const increaseQty = (cartId) =>{
  let cartUpdate = cart.cartArray;
  let cartTotalUpdate = cartTotal.cartTotal;
  cartUpdate[cartId-1].quantity = cartUpdate[cartId-1].quantity+1;
  cartUpdate[cartId-1].productTotal = (cartUpdate[cartId-1].productTotal+cartUpdate[cartId-1].productPrice);
  cartTotalUpdate = parseFloat(cartTotalUpdate) + parseFloat(cartUpdate[cartId-1].productPrice);
  cartTotalUpdate = cartTotalUpdate.toFixed(2);

  setcart({cartArray: cartUpdate})
  setcartTotal({cartTotal: cartTotalUpdate})
}


return (
  cartSubmitHandler(), getCartTotal(), 
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Product</TableCell>
        <TableCell align="right">Product Image</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Quantity</TableCell>
        <TableCell align="right">Product's Total</TableCell>
        <TableCell align="right">Delete Product</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>

      { cart.cartArray.map((row) => (

          <TableRow
          key={row.productId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row">
            {row.productName}
          </TableCell>

          <TableCell align="right">{<img src={row.productPhoto} height='80' width='80' />} </TableCell>
          <TableCell align="right">${row.productPrice}</TableCell>
          <TableCell align="right">
          <button onClick={() =>decreaseQty(row.cId)}> - </button>
            <input className="quantityInput" type="text" value={row.quantity}/>
          <button onClick={() =>increaseQty(row.cId)}> + </button>
          </TableCell>
          <TableCell align="right">{row.productTotal.toFixed(2)}</TableCell>
          <TableCell align="right">  <button className="btn btn-success" onClick={() =>deleteProductFromCart(row)}>Delete</button></TableCell>
          </TableRow>
      ))}
    </TableBody>
  </Table>

  <div align="right">Total: {cartTotal.cartTotal}
  <button className="btn btn-success checkout" onClick={() =>checkoutHandler()}>Checkout</button>
  </div>

</TableContainer>  
)
}
export default ShoppingCart;