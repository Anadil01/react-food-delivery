import React from 'react';
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className="logo"src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt='logo'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Card</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;