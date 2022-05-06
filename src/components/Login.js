import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Loginform from './Loginform';

import axios from "axios";



 const Login = () => {

  
    return (
        <form className="row g-3">
            <h2> Login below!!!</h2>
             <Loginform />          

             
         </form>
     )
}
export default Login;

