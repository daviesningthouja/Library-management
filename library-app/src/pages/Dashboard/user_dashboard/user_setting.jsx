import { User_DashboardLayout } from "../../index.js";
import { useState, useEffect } from "react";
import "./setting.css";
import axios from "axios";
import { bouncy } from 'ldrs';
const User_Setting = () => {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token') || sessionStorage.getItem('sessiontoken')
        
        // Log the token to check if it exists
        console.log("Token: ", token);

        if (!token) {
          throw new Error('No token found, please log in again');
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get('http://localhost:8080/api/Dashboard/user/profile', config);
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('Failed to load user data');
        setLoading(false);
      }
    };
    setTimeout(() => setLoading(false), 1000);
    fetchUserData();
  }, []);
  bouncy.register()
  if (loading) {
    return <User_DashboardLayout>
      <main className="setting_body">
        <div className="loding">
      
        
            <l-bouncy
              size="45"
              speed="1.75" 
              color="black" 
            ></l-bouncy>
              
        </div>
      </main> 
        </User_DashboardLayout>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <User_DashboardLayout>
    <main className="setting_body">
      <div className="setting_wrapper">
        <div className="setting_header">
          <h1>Edit Profile</h1>
        </div>
        <form className="user_detail_edit-form">
        
          <div className="user_detail_edit">
            <label htmlFor=""><h2>Photo</h2></label>
          <div className="user_pfp"><div className="pfp"><img src="" alt="" /></div>
          <div className="button-container-1">
            <span className="mas">Change</span>
            <button id='work' type="button" name="Hover">Change</button>
          </div>
          </div>
          </div>
          
          <div className="user_detail_edit">
            <label><h2>Name</h2></label>
          <div className="input_box"><input type="text" placeholder={user.name}/></div>
          </div>
          
          <div className="user_detail_edit">
            <label><h2>Enrollment</h2></label>

          <div className="input_box"><input type="text" placeholder={user.email}/></div>
          </div>
      
          <div className="user_detail_edit">
            <label><h2>Email</h2></label>

          <div className="input_box"><input type="text" placeholder={user.email}/></div>
          </div>
        
          <div className="user_detail_edit">
            <label><h2>Contact</h2></label>

          <div className="input_box"><input type="text" placeholder={user.contact}/></div>
          </div>
        
          <div className="user_detail_edit">
            <label><h2>Password</h2></label>

          <div className="input_box"><input type="password"  />{user.password}</div>
          </div>
          
      </form>
        
      </div>
          <footer className="setting_Footer">
          
          <div className="button-container-1">
            <span className="mas">Save</span>
            <button id='work' type="Submit" name="Hover">Save</button>
          </div>
          
          </footer>
      
    </main>
    </User_DashboardLayout>
  )
}

export default User_Setting
