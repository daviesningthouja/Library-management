// src/components/Global/Sidebar.js

import './Sidebar.css'; // Create this CSS file for styling
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation
//import  from "../../assets/ppf.png";

function Sidebar() {
  return (
    <div className='wrapper_Sidebar'>
      <div className="sidebar">
          <a href="#" className="logo">
              <i className='bx bx-code-alt'></i>
              <div className="logo-name"><span>Asmr</span>Prog</div>
          </a>
          <ul className="side-menu">
              <li><Link href="#"><i className='bx bxs-dashboard'></i>Dashboard</Link></li>
              <li className="active"><Link href="#"><i className='bx bx-analyse'></i>Admin</Link></li>
              <li><Link href="#"><i className='bx bx-message-square-dots'></i>Library</Link></li>
              <li><Link href="#"><i className='bx bx-group'></i>Collection</Link></li>
              
          </ul>
          <ul className="side-menu">
              <li>
                  <a href="#" className="logout">
                      <i className='bx bx-log-out-circle'></i>
                      Logout
                  </a>
              </li>
          </ul>
      </div>
    </div>
  );
}



export default Sidebar
