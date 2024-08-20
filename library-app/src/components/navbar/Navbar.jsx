import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar '>
      <a href='#'>
        <div className='navbar_logo'>
          
            <img className='navbar_logo-img' src={Logo} alt="Logo" />
            <p className='navbar_logo-text'>Library</p>
          
        </div>
        </a>
        <nav className='navbar_link'>
            <ul className='navbar_link-container wrap'>
              <li className='gradient-text'><Link to ='/Home'>Home</Link></li>
              <li className='gradient-text'><Link to ='/Home'>About</Link></li>
              <li className='gradient-text'><Link to ='/Home'>Catalog</Link></li>
              <li className='gradient-text'><Link to ='/Home'>Service</Link></li>
            </ul>
        </nav>
        <div className='navbar_login-container'>
          <div className='navbar_login-icon'>
            <a href="#">
            <FaUserCircle className='icons'/>
            </a>
          </div>
          <div className='navbar_login-btn-container'>
            
            <Link to="/user/login"><button  className='navbar_login-btn'>Login</button></Link>
            
            <Link to="/user/registration" ><button className='navbar_sign-btn'>Sign up</button></Link>
          </div>
        </div>
    </div>
  )
};

export default Navbar
