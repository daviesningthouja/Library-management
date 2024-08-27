// src/components/Global/Sidebar.js
import {useState} from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation
//import  from "../../assets/ppf.png";

function User_Sidebar({isSidebarOpen}) {
  const [activeIndex, setActiveIndex] = useState(0); // Default active index set to "dashboard"
  
  
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
 

  return (
    
      <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
          <a href="#" className="logo">
            <i className='bx bx-library'></i>
            <div className="logo-name"><span>Your</span>Library</div>
          </a>
          <ul className="side-menu">
        <li
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => handleClick(0)}
        >
          <Link href="#"><i className='bx bx-command'></i> Dashboard</Link>
        </li>
        <li
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          <Link href="#"><i className='bx bxs-book'></i>Library</Link>
        </li>
        <li
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          <Link href="#"><i className='bx bx-collection'></i>Collection</Link>
        </li>
        <li
          className={activeIndex === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          <Link href="#"><i className='bx bxs-user'></i>Profile</Link>
        </li>
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
   
  );
}



export default User_Sidebar
