
import { useState, useEffect } from 'react';
//import '../layout/DashboardLayout.css'; // Create this CSS file for styling

function Topbar() {
    const [isDarkMode, setDarkMode] = useState(false);
    const [isSidebarClosed, setSidebarClosed] = useState(false);
    const [isSearchFormVisible, setSearchFormVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarClosed(!isSidebarClosed);
      };

      const toggleSearchForm = (e) => {
        if (window.innerWidth < 576) {
          e.preventDefault();
          setSearchFormVisible(!isSearchFormVisible);
        }
      };
      
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setSidebarClosed(true);
        } else {
          setSidebarClosed(false);
        }
        if (window.innerWidth > 576) {
          setSearchFormVisible(false);
        }
      };
    
      const handleThemeToggle = () => {
        setDarkMode(!isDarkMode);
      };
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        document.body.classList.toggle('dark', isDarkMode);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isDarkMode]);
  return (
    <div className={`dashboard-container ${isSidebarClosed ? 'close' : ''}`}>
      <nav>
        <i className='bx bx-menu' onClick={toggleSidebar}></i>
        <form action="#">
            <div className="form-input">
                <input type="search" placeholder="Search..."/>
                    <button className="search-btn" type="submit" onClick={toggleSearchForm}><i className={`bx ${isSearchFormVisible ? 'bx-x' : 'bx-search'}`}></i></button>
            </div>
        </form>
        <input type="checkbox" id="theme-toggle" hidden onChange={handleThemeToggle}/>
        <label htmlFor="theme-toggle" className="theme-toggle"></label>
        <a href="#" className="notif">
            <i className='bx bx-bell'></i>
            <span className="count">12</span>
        </a>
        <a href="#" className="profile">
            <img src="#"/>
        </a>
    </nav>
  </div>
  );
}



export default Topbar;