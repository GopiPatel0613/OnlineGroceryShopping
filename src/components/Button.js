import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const STYLES=[
    'btn--primary',
    'btn--outline'
]

const SIZES =[
    'btn--medium',
    'btn--large'
]
export const Button =({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    address
})=> {
    if(type==='signup'){
        address = '/SignUp';
    
    const checkButtonStyle =STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize =SIZES.includes(buttonSize )? buttonStyle : SIZES[0]
        return(

            <Link className ={`btn ${checkButtonStyle}${checkButtonSize}`} type={type} to={'/SignUp'}>{children}</Link>)
    }
    else{
        const checkButtonStyle =STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize =SIZES.includes(buttonSize )? buttonStyle : SIZES[0]
        return(
            <Link className ={`btn ${checkButtonStyle}${checkButtonSize}`} type={type} to={'/Login'}>{children}</Link>)
        
    }
}