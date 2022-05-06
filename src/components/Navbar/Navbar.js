import React, {Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from "../Button"
import { useNavigate } from 'react-router-dom';


class Navbar extends Component {

    state = {clicked:false}
   

    handleClick =() =>{
        this.setState({clicked: !this.state.clicked})
    }
    handleSignUp = (event)=>{
        
    }
    handlelogout=(event)=>{
        localStorage.clear();
        window.location.reload(true);
        window.location.href("/")
    }
    render(){
        if(localStorage.length===0){
            return(

                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Express Online Grocery </h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                    </div>
                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index)=>{
                          return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
    
                          )  
                        })}
                       </ul>
                       <ul className="shoppingcart">
                        <a href="">
                        <span className="shoppingcart"><i className="fas fa-cart-plus"></i><span className="cartCount">0</span></span>
                        </a>
                        </ul>
                        <Button type='signup'>SignUp</Button>
                        <br></br>
                        <Button type='signin'> Login</Button>
                        </nav>
            
            )
        }else {
            return(

                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Express Online Grocery </h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                    </div>
                    <ul className={this.state.clicked? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index)=>{
                          return(
                            <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
    
                          )  
                        })}
                       </ul>
                       <ul className="shoppingcart">
                        <a href="">
                        <span className="shoppingcart"><i className="fas fa-cart-plus"></i><span className="cartCount">0</span></span>
                        </a>
                        </ul>
                        <br></br>
                        <Button type='logout' onClick={this.handlelogout}> Logout</Button>
                        </nav>
            
            )
        }
       

    }



}
export default Navbar

