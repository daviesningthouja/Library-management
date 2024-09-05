
//import { useState, useEffect } from 'react';
//import '../layout/DashboardLayout.css'; // Create this CSS file for styling

function User_Topbar({toggleSidebar,toggleTheme}) {
    //const [isDarkMode, setDarkMode] = useState(false);

    
    //const [isSearchFormVisible, setSearchFormVisible] = useState(false);
     
    

      // const toggleSearchForm = (e) => {
      //   if (window.innerWidth < 576) {
      //     e.preventDefault();
      //     setSearchFormVisible(!isSearchFormVisible);
      //   }
      // };
      
      
      
  return (
    
      <nav>
        <i className='bx bx-menu'  onClick={toggleSidebar}></i>
        <form action="#">
            
        </form>
        <input type="checkbox" id="theme-toggle" hidden onChange={toggleTheme}/>
        <label htmlFor="theme-toggle" className="theme-toggle"></label>
        <a href="#" className="notif">
            <i className='bx bx-bell'></i>
            <span className="count">12</span>
        </a>
        <a href="#" className="profile">
            <img src="#"/>
        </a>
    </nav>
  
  );
}



export default User_Topbar;