// src/components/Global/Sidebar.js
import {useState, useEffect} from 'react';
import { Link ,useLocation} from 'react-router-dom'; // Assuming you use react-router for navigation
//import  from "../../assets/ppf.png";

function User_Sidebar({isSidebarOpen}) {
  const location = useLocation(); // Hook to access the current route
  const [activeIndex, setActiveIndex] = useState(0); // Default active index set to "Dashboard"

  // Update activeIndex based on the current path
  useEffect(() => {
    switch (location.pathname) {
      case '/user':
        setActiveIndex(1);
        break;
      case '/user/setting': // Example path for User
        setActiveIndex(3);
        break;
      case '/user/profile': // Example path for Collection
        setActiveIndex(3);
        break;
      case '/user/collection': // Example path for Collection
        setActiveIndex(2);
        break;
      default:
        setActiveIndex(0); // Default to Dashboard
    }
    
  }, [location.pathname]);

 

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
 

  return (
    
      <div className={`sidebar ${isSidebarOpen ? '' : 'close'}`}>
          <Link to="#" className="logo">
            <i className='bx bx-library'></i>
            <div className="logo-name"><span>Your</span>Library</div>
          </Link>
          <ul className="side-menu">
        <li
          className={activeIndex === 0 ? 'active' : ''}
          onClick={() => handleClick(0)}
        >
          <Link to="/user/dashboard"><i className='bx bx-command'></i> Dashboard</Link>
        </li>
        <li
          className={activeIndex === 1 ? 'active' : ''}
          onClick={() => handleClick(1)}
        >
          <Link to="#"><i className='bx bxs-book'></i>Library</Link>
        </li>
        <li
          className={activeIndex === 2 ? 'active' : ''}
          onClick={() => handleClick(2)}
        >
          <Link to="/user/collection"><i className='bx bx-collection'></i>Collection</Link>
        </li>
        <li
          className={activeIndex === 3 ? 'active' : ''}
          onClick={() => handleClick(3)}
        >
          <Link to="/user/profile"><i className='bx bxs-user'></i>Profile</Link>
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
