import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./SignUp.css"
import axios from "axios";
import Card from '@mui/material/Card';


 const SignUp = () => {

  const Navigate = useNavigate();
 

    let [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
       
        
    })
     const userChangeHandler = (event) => {
        const name = event.target.name;         
        const value = event.target.value;
        const tempUser = { ...user};
        tempUser[name] = value;
      
      setUser(tempUser);
       
    }

    const signUpSubmitHandler = () => {
        axios.post("http://localhost:8080/SaveUser", user).then((response) => {
            localStorage.setItem("loggedInUser", user.email);
            Navigate('/Thankyou');
           

        }).catch((error) => {
            console.log(error);         })
    }
    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6 signUpFormCard">
            <Card className="signUpFormCardMUI" sx={{ maxWidth: 475 }}>
            <form className="signUpForm">
                <h2 className="signUpLabel"> Sign up below!!!</h2>
                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                        <input name="firstName" value={user.firstName} onChange={userChangeHandler} type="text" className="form-control" id="inputFirstName" />
                        </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                        <input name="lastName" value={user.lastName} onChange={userChangeHandler} type="text" className="form-control" id="inputLastName" />
                        </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" />
                        </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" />
                        </div>
                    <div className="col-md-3"></div>
                </div>

                <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                        </div>
                        </div>
                    <div className="col-md-3"></div>
                </div>
                
                <div className="signUpButton d-grid gap-2 ">
                    <button onClick={signUpSubmitHandler} className="btn btn-outline-success" type="button">Sign up</button>
                </div>
            </form>
            </Card>
            </div>
            <div className="col-md-2"></div>
         </div>
     )
}
export default SignUp;

