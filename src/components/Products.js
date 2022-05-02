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


export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productList: [] };
  }

  

  productsHandler = () => {
    axios.get("http://localhost:8080/getProducts").then((response) => {
      localStorage.getItem("loggedInUser");
      this.setState({ productList: response.data });
    }).catch((error) => {
      console.log(error);
    })
  }
  cartHandler(productDetails){
    console.log(productDetails);
  }


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
                <TableCell align="right">  <button class="btn btn-success" onClick={() =>this.cartHandler(row)}>Add to cart</button></TableCell>
              
              </TableRow>
            ))}


          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createProducts(pName, pDesc, pPhoto, pPrice, pQuantity) {
//   return { pName, pDesc, pPhoto, pPrice, pQuantity};
// }

// const rows = [
//   createProducts('milk', 'organicmilk',12.0, 2),
//   createProducts( 'milk', 'organicmilk', 'https://i.ibb.co/0hM5Z6N/6000201479118.jpg' ,12.0, 2),
// ];
  


// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Milk</TableCell>
//             <TableCell align="right">pDesc</TableCell>
//             <TableCell align="right">pPhoto</TableCell>
//             <TableCell align="right">pPrice</TableCell>
//             <TableCell align="right">pQuantity</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.pname}
//               </TableCell>
//               <TableCell align="right">{row.pDesc}</TableCell>
//               <TableCell align="right">{<img src='https://i.ibb.co/0hM5Z6N/6000201479118.jpg'  width="80" height="80"/>}</TableCell>
//               <TableCell align="right">{row.pPrice}</TableCell>
//               <TableCell align="right">{row.pQuantity}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }



