import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";
import './Login.css';

const Loginform =()=>{
    const Navigate = useNavigate();

    const [loginUser, setloginUser] = useState({ email: '', password: '' });

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSignIn = { ...loginUser };
        tempSignIn[name] = value;
        setloginUser(tempSignIn);
    }

    const loginSubmitHandler = () => {
        axios.post("http://localhost:8080/login", loginUser).then((response) => {
            localStorage.setItem("loggedInUser", response.data.email)
            Navigate('/Products');
            window.location.reload(true);

        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <form className="loginDetails">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <label htmlFor="inputDetails inputEmail4" className="form-label">Email</label>
                    <input name="email" value={loginUser.email} onChange={changeHandler} type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-3"></div>
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="inputDetails col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input name="password" value={loginUser.password} onChange={changeHandler} type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-md-3"></div>
            </div>
        
            
             <button className="btn btn-outline-success loginButton" onClick={loginSubmitHandler} type="button">login</button>
             
             </form>
             

                        
        //<form className="d-flex">
                        //<input className='="form-control me-2' onChange={changeHandler} name="email" value={loginUser.email} type="email" />
                       // <input className='="form-control me-2' onChange={changeHandler} name="password" value={loginUser.password} type="password" />
                        //<button className="btn btn-outline-success" onClick={loginSubmitHandler} type="button">login</button>
                  // </form>
    )
}
export default Loginform