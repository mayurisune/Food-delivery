import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  const [menu, setMune] =useState('home');
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo"></img>
        <ul className="navbar-menu">
          <li onClick={()=>setMune('home')} className={ menu ==='home'? 'active':''} >Home</li >
          <li onClick={()=>setMune('menu')} className={ menu === 'menu'? 'active':''}>Menu</li>
          <li onClick={()=>setMune('mobile-app')} className={ menu === 'mobile-app'?'active': '' }>Mobile-app</li>
          <li onClick={()=>setMune('contact-us')} className={menu === 'contact-us'? 'active' :''}>Contact us</li >
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt=""></img>
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt=""></img>
            <div className="dot"></div>
          </div>
          <button>Sign In</button>
        </div>
    </div>
  );
};

export default Navbar;
