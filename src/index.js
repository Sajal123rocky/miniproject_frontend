import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Project from './pages/Project';
import Details from './pages/Details';
import Transactions from './pages/Transactions';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Home from './pages/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "project",
    element: <Project />,
  },
  {
    path: "details",
    element: <Details />,
  },
  {
    path: "transactions",
    element: <Transactions />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
     path: "home",
    element: <Home />,
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/> 
   
  </React.StrictMode>
);

