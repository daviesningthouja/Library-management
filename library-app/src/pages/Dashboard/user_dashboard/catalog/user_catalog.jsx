import React from 'react';
import { Link } from 'react-router-dom';



const User_Catalog = () => {
  return ( 
    <div>
      <div className="header">
          <div className="left">
            <h2>Dashboard</h2>
            <ul className="breadcrumb">
              <Link to="/admin/Dashboard">
              <li>
                <a className="active">Catalog</a>
              </li>
              </Link>
            </ul>
          </div>
          
        </div>

        <ul className="insights">
          <Link to="#">
          <li>
            <i className='bx bx-code-alt'></i>
            <span className="info">
              <h3>
                Profile
              </h3>
              
            </span>
          </li>
          </Link>
          <Link to="#">
            <li>
              <i className="bx bx-show-alt"></i>
              <span className="info">
                <h3>
                  Collections
                </h3>
                
              </span>
            </li>
          </Link>
          <Link to="#">
            <li>
              <i className="bx bx-line-chart"></i>
              <span className="info">
                <h3>Library</h3>
              </span>
            </li>
          </Link>
        </ul>
    </div>
  )
}

export default User_Catalog
