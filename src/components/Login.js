import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

import axios from "axios";



 const Login = () => {

  const Navigate = useNavigate();
 

    let [user, setUser] = useState({
        
        email: '',
        password: '',
       
        
    })
     const userChangeHandler = (event) => {
        const name = event.target.name;         
        const value = event.target.value;
        const tempUser = { ...user};
        tempUser[name] = value;
      
      setUser(tempUser);
       
        //console.log(event);
       
    }

    const loginSubmitHandler = () => {
        axios.post("http://localhost:8080/login", user).then((response) => {
            localStorage.setItem("loggedInUser", response.data.email)
            Navigate('/Products');
           

        }).catch((error) => {
            console.log(error);         })
    }
    return (
        <form className="row g-3">
            <h2> Login below!!!</h2>
                        

             <div className="col-md-6">
                 <label for="inputEmail4" className="form-label">Email</label>
                 <input name="email" value={user.email} onChange={userChangeHandler} type="email" className="form-control" id="inputEmail4" />
             </div>
             <div className="col-md-6">
                 <label for="inputPassword4" className="form-label">Password</label>
                 <input name="password" value={user.password} onChange={userChangeHandler} type="password" className="form-control" id="inputPassword4" />
             </div>
             <div className="col-12">
                 <div className="form-check">
                     <input className="form-check-input" type="checkbox" id="gridCheck" />
                     <label className="form-check-label" for="gridCheck">
                         Check me out
                     </label>
                 </div>
             </div>
             <div className="d-grid gap-2 ">
                 <button onClick={loginSubmitHandler} className="bg-dark btn btn-outline-success" type="button">Login</button>
             </div>
         </form>
     )
}
export default Login;

