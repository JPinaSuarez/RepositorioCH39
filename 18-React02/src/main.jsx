import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Astros from './components/Astros/Astros.jsx'
import Login from './components/login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />
  },
  {
    path: "/login", element: <Login />
  },
  {
    path: "/astros", element: <Astros />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App router={ router } />
  </BrowserRouter>,

)
