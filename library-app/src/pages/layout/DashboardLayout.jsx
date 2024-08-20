import './DashboardLayout.css';
import { Topbar, Sidebar } from '../Global'
import { useState } from 'react';
const DashboardLayout = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <div className={`wrapper_dashboardlayout ${isSidebarOpen ? '' : 'close'}`} >
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className='content'>
        <Topbar  toggleSidebar={toggleSidebar}  />
        
        {children }
        
        
      </div>
    </div>
  )
}
// style={{ display: 'flex' }
// style={{ marginLeft: '200px', padding: '20px', width: '100%' }

export default DashboardLayout
