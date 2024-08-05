import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './componenets/Header/Header.jsx'
import Home from './componenets/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './componenets/Layout.jsx'
import About from './componenets/About/About.jsx'
import Contact from './componenets/Contact/Contact.jsx'
import Users from './componenets/Users/Users.jsx'
import Github, { GitHubInfo } from './componenets/Github/Github.jsx'

// const router =createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children:[
//       {
//         path : "",
//         element : <Home/>
//       },
//       {
//         path : "/about",
//         element : <About/>
//       },
//       {
//         path : "/contact",
//         element :<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path="" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/users/:user" element={<Users/>}/>
       <Route loader={GitHubInfo} path="/github" element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
