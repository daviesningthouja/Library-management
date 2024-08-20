// src/components/Global/Sidebar.js
import {useState} from 'react';
import { Link } from 'react-router-dom'; // Assuming you use react-router for navigation
//import  from "../../assets/ppf.png";

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(1); // Default active index set to "Admin"
  
  
  
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
 

  return (
    <div className='wrapper_Sidebar'>
      <div className= "sidebar">
          <a href="#" className="logo">
              <i className='bx bx-code-alt'></i>
              <div className="logo-name"><span>Asmr</span>Prog</div>
          </a>
          <ul className="side-menu">
        <li
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => handleClick(0)}
        >
          <Link href="#"><i className='bx bxs-dashboard'></i>Dashboard</Link>
        </li>
        <li
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          <Link href="#"><i className='bx bx-analyse'></i>Admin</Link>
        </li>
        <li
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          <Link href="#"><i className='bx bx-message-square-dots'></i>Library</Link>
        </li>
        <li
          className={activeIndex === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          <Link href="#"><i className='bx bx-group'></i>Collection</Link>
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
    </div>
  );
}



export default Sidebar
