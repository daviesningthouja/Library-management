import './DashboardLayout.css';
import { Topbar, Sidebar } from '../Global'

const DashboardLayout = ({children}) => {
 
  return (
    <div className='wrapper_dashboardlayout' >
      <Sidebar className='wrapper_dashboardlayout'/>
      <div className='content'>
        <Topbar className='wrapper_dashboardlayout'/>
        
        {children }
        
        
      </div>
    </div>
  )
}
// style={{ display: 'flex' }
// style={{ marginLeft: '200px', padding: '20px', width: '100%' }

export default DashboardLayout
