import './DashboardLayout.css';
import { Topbar, Sidebar } from '../Global'

const DashboardLayout = ({children}) => {
 
  return (
    <div className='wrapper_dashboardlayout' >
      <Topbar />
      <div className='content'>
        <Sidebar />
        
        {children}
        
        
      </div>
    </div>
  )
}
// style={{ display: 'flex' }
// style={{ marginLeft: '200px', padding: '20px', width: '100%' }

export default DashboardLayout
