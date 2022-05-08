import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Products.css';
import axios from 'axios';


         
      

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productList: [],
                   cart:{
                      quantity: '',
                      userEmail: '',
                      productId: ''
                    } 
    };
  }

  

  productsHandler = () => {
    axios.get("http://localhost:8080/getProducts").then((response) => {
      //localStorage.getItem("loggedInUser");
      this.setState({ productList: response.data });
    }).catch((error) => {
      console.log(error);
    })
  }
  cartHandler(productDetails){
    const params = {
      cart: {
        quantity: 1,
        userEmail: localStorage.getItem("loggedInUser"),
        productId: productDetails.pId,
        productName: productDetails.pName,
        productPhoto: productDetails.pPhoto,
        productPrice: productDetails.pPrice
      }
    }

          axios.post("http://localhost:8080/saveCart",params.cart).then((response) => {
          }).catch((error) => {
            console.log(error);
          })
  };
      
    
  


  render() {

    if (this.state.productList.length === 0) {
      this.productsHandler();
    }


    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Products</TableCell>
              <TableCell align="right">Description </TableCell>
              <TableCell align="right">Product Image</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {this.state.productList.map((row) => (

              <TableRow
                key={row.pId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.pId}  </TableCell>
                <TableCell component="th" scope="row">
                  {row.pName}
                </TableCell>
                <TableCell align="right">{row.pDesc}</TableCell>

                <TableCell align="right">{<img src={row.pPhoto} height='80' width='80' />} </TableCell>

                <TableCell align="right">${row.pPrice}</TableCell>
                <TableCell align="right">{row.pQuantity}</TableCell>
                <TableCell align="right">  <button className="btn btn-success" onClick={() =>this.cartHandler(row)}>Add to cart</button></TableCell>
              
              </TableRow>
            ))}


          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

