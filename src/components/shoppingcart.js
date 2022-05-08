import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';



export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [],
                   cartTotal:'',
                   email: localStorage.getItem("loggedInUser")
    };
  }

cartSubmitHandler = () => {
   axios.get("http://localhost:8080/getCart", { params: { email: this.state.email } }).then((response) => {
    this.setState({ cart: response.data });
    console.log(this.state.cart);
   }).catch((error) => {
       console.log(error);         })
}
getCartTotal = () => {
   axios.get("http://localhost:8080/getCartTotal", { params: { email: this.state.email } }).then((response) => {
    this.setState({ cartTotal: response.data });
    // console.log(cartTotal);
   }).catch((error) => {
       console.log(error);         })
}



  render() {

    if (this.state.cart.length === 0) {
      this.cartSubmitHandler();
      this.getCartTotal();

    }
    return (
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

      { this.state.cart.map((row) => (

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
    );
  }
}



// const ShoppingCart=()=>{
//   let [cart, setcart] = useState({
//    cartArray: []
//   })
//   let [cartTotal, setcartTotal] = useState({
//     cartTotal: '',
//   })
// const cartChangeHandler = (event) => {
//    const name = event.target.name;         
//    const value = event.target.value;
//    const tempUser = { ...cart};
//    tempUser[name] = value;
 
//  setcart(tempUser);
  
// }
// let email = localStorage.getItem("loggedInUser");

// const cartSubmitHandler = () => {
//    axios.get("http://localhost:8080/getCart", { params: { email: email } }).then((response) => {
//     cart.cartArray = response.data;
//     //setcart(response.data);
//     console.log(cart);
//    }).catch((error) => {
//        console.log(error);         })
// }
// const getCartTotal = () => {
//    axios.get("http://localhost:8080/getCartTotal", { params: { email: email } }).then((response) => {
//     cartTotal = response.data;
//     // console.log(cartTotal);
//    }).catch((error) => {
//        console.log(error);         })
// }
// // cId: 4
// // productId: 1
// // productName: "Milk"
// // productPhoto: "https://i.ibb.co/0hM5Z6N/6000201479118.jpg"
// // productPrice: 3.79
// // productTotal: 7.58
// // quantity: 2
// // userEmail: "mp@gmail.com"
// return (
//   cartSubmitHandler(), getCartTotal(), 
//   <TableContainer component={Paper}>
//   <Table sx={{ minWidth: 650 }} aria-label="simple table">
//     <TableHead>
//       <TableRow>
//         <TableCell>Product</TableCell>
//         <TableCell align="right">Product Image</TableCell>
//         <TableCell align="right">Price</TableCell>
//         <TableCell align="right">Quantity</TableCell>
//         <TableCell align="right">Product's Total</TableCell>
//       </TableRow>
//     </TableHead>

//     <TableBody>

//       { cart.cartArray.map((row) => (

//           <TableRow
//           key={row.productId}
//           sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//           >
//           <TableCell component="th" scope="row">
//             {row.productName}
//           </TableCell>

//           <TableCell align="right">{<img src={row.productPhoto} height='80' width='80' />} </TableCell>

//           <TableCell align="right">${row.productPrice}</TableCell>
//           <TableCell align="right">{row.quantity}</TableCell>
//           <TableCell align="right">{row.productTotal}</TableCell>
//           </TableRow>
//       ))}
//     </TableBody>
//   </Table>

// </TableContainer>  
// )
// }
// export default ShoppingCart;