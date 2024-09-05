import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/logo.png'
import Mitlogo from '../../assets/manipur-institute-of-technology-mit-logo-26-06-2017.png'
import MUlogo from '../../assets/Manipur_University_Logo.png'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#'>
        <div className='navbar_logo'>
          
            <img className='navbar_logo-img' src={Mitlogo} alt="Logo" />
            
          
        </div>
        </a>
        <nav className='navbar_link'>
            <ul className='navbar_link-container wrap'>
              <li className='gradient-text'><Link to ='/Home'>Home</Link></li>
              <li className='gradient-text'><Link to ='/About'>About</Link></li>
              <li className='gradient-text'><Link to ='/Product'>Product</Link></li>
              <li className='gradient-text'><Link to ='/Service'>Service</Link></li>
            </ul>
        </nav>
       
          <div className='navbar_login-btn-container'>
            
          <div className="login-btn-container">
              <Link to= "/user/login">
                <span className="maskLogin">Login</span>
                <button id='work' type="Submit" name="Hover">Login</button>
              </Link>
              </div>
            
            {/* <Link to="/user/registration" ><button className='navbar_sign-btn'>Sign up</button></Link> */}
          </div>
        
    </nav>
  )
};

export default Navbar
