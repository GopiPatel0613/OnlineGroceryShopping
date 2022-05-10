import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Loginform from './Loginform';
import './Login.css';
import axios from "axios";



 const Login = () => {

  
    return (
        <form className="loginForm">
            <div className="col-md-12">
            <Loginform/> 
            </div>
                    

             
         </form>
     )
}
export default Login;

