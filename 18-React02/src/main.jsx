import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Astros from './components/Astros/Astros.jsx'
import Login from './components/login/Login.jsx'

/* Aquí irán mis Routes definidas de manera individual, definiendo rutas mediante el path asignado y el elemento 
* path, hace referencia a la ruta que se escribirá en el buscador del navegador ../path
* element, hace referencia al componente al cual me quiero dirigir (componente completo)
*/

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
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,

)
