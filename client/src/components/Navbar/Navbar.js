import React from 'react'
import Logo from "../../assets/LogoShape.svg";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
  
    <div className="nav-bar">
      <div className="nav-bar-logo">
        <img src={Logo} alt=""></img>
        <p className="logo-text">Boldo</p>
      </div>
      <div className="menu-list">
        <div className="text">Product</div>
        <div className="text">Services</div>
        <div className="text">About</div>
        <button className="menu-btn">Log In</button>
      </div>
      <div className="menu-list1">
        <MenuIcon style={{ fontSize: '3rem' }}/>
      </div>
    </div> 
      
  )
}

export default Navbar