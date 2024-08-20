
import '../layout/DashboardLayout.css'; // Create this CSS file for styling

function Topbar() {
  return (
    
      <nav>
        <i className='bx bx-menu'></i>
        <form action="#">
            <div className="form-input">
                <input type="search" placeholder="Search..."/>
                <button className="search-btn" type="submit"><i class='bx bx-search'></i></button>
            </div>
        </form>
        <input type="checkbox" id="theme-toggle" hidden/>
        <label  onClick={() => handleLinkClick(index)} for="theme-toggle" className="theme-toggle"></label>
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



export default Topbar;