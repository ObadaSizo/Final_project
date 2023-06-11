import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Squad from './pages/Squad';
import FansZone from './pages/fans-zone';
import Live from './pages/Live';
import Sign from './components/Sign';
import LogIN from './components/LogIn';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children : [
      {
      path:"/",
      element:<Home />
      },
      {
      path:"about",
      element:<About />
      },
      {
      path:"squad",
      element:<Squad />
      },
      {
      path:"fans-zone",
      element:<FansZone />
      },
      {
      path:"live",
      element:<Live />
      },
      {
        path:"sign-up",
        element:<Sign/>
      },{
        path :"log-in",
        element : <LogIN/>
      }
      ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
