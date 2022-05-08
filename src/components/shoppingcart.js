import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

const ShoppingCart=()=>{
  let [cart, setcart] = useState({
   cartArray: []
  })
  let [cartTotal, setcartTotal] = useState({
    cartTotal: '',
  })

let email = localStorage.getItem("loggedInUser");

const cartSubmitHandler = () => {
   axios.get("http://localhost:8080/getCart", { params: { email: email } }).then((response) => {
    setcart({cartArray: response.data})
   }).catch((error) => {
       console.log(error);         })
}
const getCartTotal = () => {
   axios.get("http://localhost:8080/getCartTotal", { params: { email: email } }).then((response) => {
    cartTotal = response.data;
    setcartTotal({cartTotal: response.data})
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
          <TableCell align="right">{row.quantity}</TableCell>
          <TableCell align="right">{row.productTotal}</TableCell>
          </TableRow>
      ))}
    </TableBody>
  </Table>

</TableContainer>  
)
}
export default ShoppingCart;