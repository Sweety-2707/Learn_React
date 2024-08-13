import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componenets/Header/Header.jsx'
import Home from './componenets/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './componenets/Layout.jsx'
import Food from './componenets/Food/Food.jsx'
import Travel from './componenets/Travel/Travel.jsx'
import Places from './componenets/Places/Places.jsx'
import Hotel from './componenets/Hotel/Hotel.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="/food" element={<Food/>}/>
       <Route path="/travel" element={<Travel/>}/>
       <Route path="/hotel" element={<Hotel/>}/>
       <Route path="/places" element={<Places/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
