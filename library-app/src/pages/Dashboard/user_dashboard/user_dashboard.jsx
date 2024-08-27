// src/components/Dashboard/Dashboard.js

import { User_DashboardLayout } from "../../index.js";
import { Link } from "react-router-dom";
import {User_Catalog} from "../index.js";
const User_Dashboard = () =>{
  return (
    <User_DashboardLayout>
      <main className="wrapper_dashboard">
      
        <User_Catalog/>
        <div className="bottom-data">
          <div className="orders">
            <div className="header">
              <i className="bx bx-receipt"></i>
              <h3>Recent Orders</h3>
              <i className="bx bx-filter"></i>
              <i className="bx bx-search"></i>
            </div>
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Order Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="images/profile-1.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>14-08-2023</td>
                  <td>
                    <span className="status completed">Completed</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="images/profile-1.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>14-08-2023</td>
                  <td>
                    <span className="status pending">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src="images/profile-1.jpg" />
                    <p>John Doe</p>
                  </td>
                  <td>14-08-2023</td>
                  <td>
                    <span className="status process">Processing</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

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
    </User_DashboardLayout>
  );
}

export default User_Dashboard;
