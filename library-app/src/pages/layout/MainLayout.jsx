import React from 'react'
import {Navbar, Footer} from '../../components';

const MainLayout = ({children}) =>{
  return (
    <div className="App">
      <div className="gradient_bg">
         <Navbar/>
        {children}
       </div>
      
       <Footer/>
     </div> 
  )
}

export default MainLayout
