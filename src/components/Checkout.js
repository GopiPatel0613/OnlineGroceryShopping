import React, { useEffect,useState } from "react";
// import axios from "axios";
// import { Route } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
import './Checkout.css'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '@mui/material/Card';


const Checkout = () => {  

  const navigate = useNavigate();
    
       const handleSuccess=()=>{
       
          navigate('/Success');
       }
  
    return (
    
      <div className="row maincontainer">
        <div className="col-md-2"></div>
         <div className="col-md-8 checkoutFormCard">
         <Card className="checkoutFormCardMUI" sx={{ maxWidth: 900 }}>
        <div className="container">
          <div className="py-5 text-center">
            
            <h2>Checkout form</h2>
            
          </div>
          <div className="row inputDetails">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Promo code"/>
                  <div className="input-group-append">
                    <button type="button" className="btn btn-secondary">Redeem</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" novalidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username">Username</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                  <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select className="custom-select d-block w-100" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select className="custom-select d-block w-100" id="state" required>
                      <option value="">Choose...</option>
                      <option>Illinois</option>
                      <option>Missouri</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" className="form-control" id="zip" placeholder="" required />
                    <div className="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="same-address" />
                  <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                </div>
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="save-info" />
                  <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                </div>
                <hr className="mb-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                    <label className="custom-control-label" htmlFor="credit">Credit card</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                    <label className="custom-control-label" htmlFor="debit">Debit card</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-name">Name on card</label>
                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                    <small className="text-muted">Full name as displayed on card</small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">Expiration</label>
                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="cc-expiration">CVV</label>
                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="mb-4" />
                <button onClick={()=>handleSuccess()} className="btn btn-primary btn-lg btn-block" type="button">Pay Now</button>
              </form>
            </div>
          </div>
          
        </div>
        </Card>
        </div>
        <div className="col-md-2"></div>
      </div>
      
)

}

export default Checkout;

// const Checkout = () => { <button onClick={()=>handleScrollMenu()}>
         
//     const Navigate = useNavigate();
 

//     let [order, setOrder] = useState({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         fullAddress: '',
//         city:'',
//         state:'',
//         zipCode:'',

        
       
        
//     })
//      const orderChangeHandler = (event) => {
//         const name = event.target.name;         
//         const value = event.target.value;
//         const tempOrder = { ...order};
//         tempOrder[name] = value;
      
//       setOrder(tempOrder);
       
//     }

    
    

//     return (
        
// <div>
//    <div className="form-box">
//        <div classname="container">
//            <h6>Home/checkout</h6>
//        </div>
//        <div className="py-4">
//            <div className="container">
//                <div className="row">
//                    <div className ="col-md-7">
//                        <div className="card">
//                            <div className="card-header">
//                                <h4>Basic Information</h4>

//                            </div>
//                            <div className="card-body"> 
//                            <div className="row">
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> </label>
//                                        <input type= "text" name="tname" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> Last Name</label>
//                                        <input type= "text" name="lasttname" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> Phone Number </label>
//                                        <input type= "text" name="phone" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> Email Address</label>
//                                        <input type= "text" name="email" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-12">
//                                    <div className="form-group mb-3">
//                                        <label> Street Name</label>
//                                        <input type= "text" name="streetname" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> City</label>
//                                        <input type= "text" name="city" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> State</label>
//                                        <input type= "text" name="state" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-6">
//                                    <div className="form-group mb-3">
//                                        <label> Zip Code</label>
//                                        <input type= "text" name="zipcode" className="form-control"/>
 
//                                    </div>

//                                </div>
//                                <div className="col-md-12"> 
//                                <div className="form-group text-end">
//                                    <button type="button" className="btn btn-primary">Place Order</button>

//                                </div>

//                                </div>
//                            </div>
//                            </div>
                           

//                            </div>

//                        </div>

//                    </div>

//                </div>

//            </div>
//        </div>
//    </div>

        
//     );
// }
