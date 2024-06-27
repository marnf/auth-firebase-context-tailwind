import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import Registration from './components/Registration.jsx';
import LogIn from './components/LogIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivetRouter from './components/PrivetRouter/PrivetRouter.jsx';
import Orders from './components/Orders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path:'/orders',
        element:<PrivetRouter><Orders></Orders></PrivetRouter>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
