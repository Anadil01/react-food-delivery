import React from 'react';
import ReactDOM from "react-dom/client";
import { useState , useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Grocery } from './Grocery';
import UserContext from "../utils/UserContext";





const Header = ()=>{
    const {loggedInUser} = useContext(UserContext);
   
    const [btn , setBtn] = useState("Login");

    const onlineStatus = useOnlineStatus();
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className="logo"src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt='logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status : {onlineStatus ? "✅" : "🔴"}</li>
                     <li><Link to="/glocery">Grocery Store</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link  to="/about">About us</Link> </li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Card</li>
                    <li>{loggedInUser}</li>
                    <button className='btn' onClick={()=>{
                       btn === "Login" ?  setBtn("Logout") : setBtn("Login");
                    }}>{btn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;