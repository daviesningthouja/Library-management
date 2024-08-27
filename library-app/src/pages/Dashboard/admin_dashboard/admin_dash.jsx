// src/components/Dashboard/Dashboard.js

import { Admin_DashboardLayout } from "../../index.js";
//import { Link } from "react-router-dom";
import { useState } from "react";
import {Admin_Cat} from "../index.js";
const Admin_Dash = () =>{
  
  
  return (
    <Admin_DashboardLayout>
      <main className="wrapper_dashboard">
      
        <Admin_Cat/>
        
        <div className="bottom-data">
          <div className="reminders">
            
            <div className="header">
              <i className="bx bx-note"></i>
              <h3>Remiders</h3>
              <i className="bx bx-filter"></i>
              <i className="bx bx-plus"></i>
            </div>
            <ul className="task-list">
              <li className="completed">
                <div className="task-title">
                  <i className="bx bx-check-circle"></i>
                  <p>Start Our Meeting</p>
                </div>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="completed">
                <div className="task-title">
                  <i className="bx bx-check-circle"></i>
                  <p>Analyse Our Site</p>
                </div>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
              <li className="not-completed">
                <div className="task-title">
                  <i className="bx bx-x-circle"></i>
                  <p>Play Footbal</p>
                </div>
                <i className="bx bx-dots-vertical-rounded"></i>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Admin_DashboardLayout>
  );
}

export default Admin_Dash;
