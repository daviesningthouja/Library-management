import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'
import {Home, Service,Aboutus,Product, NoPage, LoginForm, Registration, User_Dashboard, Admin_Dashboard, Admin_Dash,User_Profile, User_Setting, User_Collection} from './pages';
// Router
import {
createBrowserRouter,RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "Service",
    element: <Service/>,
  },
  {
    path: "About",
    element: <Aboutus/>,
  },
  {
    path: "Product",
    element: <Product/>,
  },



  {
    path: "/admin/Dashboard",
    element: <Admin_Dashboard/>
  },
  
  {
    path: "/admin/Dashboard/Administrator",
    element: <Admin_Dash/>
  },




  {
    path: "/user/Dashboard",
    element: <User_Dashboard/>,
  },
  {
    path: "/user/profile",
    element: <User_Profile/>,
  },
  {
    path: "/user/collection",
    element: <User_Collection/>,
  },
  {
    path: "/user/setting",
    element: <User_Setting/>
  },
  //admin/dashboard
  //user/dashboard
  {
    //error throw twba
    path: "*",
    element: <NoPage/>,
  },
  {
    path:"/user/Login",
    element: <LoginForm/>,
  },
  //admin login
  {
    path:"/user/registration",
    element: <Registration/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
