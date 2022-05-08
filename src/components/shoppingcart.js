import React, { useState } from "react";
import Products from './Products';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const ShoppingCart=()=>{
  let [cart, setcart] = useState({
    userEmail: '',
    productImage: '',
    productName: '',
    quantity: '',
    productPrice: '',
    total:'',
  })
  let [cartTotal, setcartTotal] = useState({
    cartTotal: '',
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
    cart = response.data;
    console.log(cart);
   }).catch((error) => {
       console.log(error);         })
}
const getCartTotal = () => {
   axios.get("http://localhost:8080/getCartTotal", { params: { email: email } }).then((response) => {
    cartTotal = response.data;
    // console.log(cartTotal);
   }).catch((error) => {
       console.log(error);         })
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
      </TableRow>
    </TableHead>

    <TableBody>

      {/* {row => (

          <TableRow
          key={row.productId}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
          <TableCell component="th" scope="row">
            {row.productImage}  </TableCell>
          <TableCell component="th" scope="row">
            {row.productName}
          </TableCell>

          <TableCell align="right">{<img src={row.productPhoto} height='80' width='80' />} </TableCell>

          <TableCell align="right">${row.productPrice}</TableCell>
          <TableCell align="right">{row.productQuantity}</TableCell>

          </TableRow>
      )} */}


    </TableBody>
  </Table>
</TableContainer>
    
)
}
export default ShoppingCart;