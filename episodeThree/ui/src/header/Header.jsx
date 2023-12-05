import React from 'react';
import "./styles.css";

export const Header = () => {

    const logo = "https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2"
  return (
    <div className='main_Container'>
          <div className="logo_Container">
          <img src={logo} alt="logo" className='logo' />
          </div>
          <div className="nav_Items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
               </ul>
          </div>
    </div>
  )
}
