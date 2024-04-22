import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import ContactPage from './Pages/ContactPage';
import ClientAlbum from './Pages/ClientAlbum';
import BlogPage from './Pages/BlogPage';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Book from './Pages/Book';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <AboutPage/>,
  },
  {
    path: "portfolio",
    element: <PortfolioPage/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
  {
    path: "book",
    element: <Book/>,
  },
  {
    path: "clientalbum",
    element: <ClientAlbum/>,
  },
  {
    path: "contact",
    element: <ContactPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router}/>
  
);

