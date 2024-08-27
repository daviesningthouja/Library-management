import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import './index.css'
import {Home, NoPage, LoginForm, Registration, User_Dashboard, Admin_Dashboard, Admin_Dash} from './pages';
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
