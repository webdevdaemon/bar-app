// import logo from './logo.svg'
import React from 'react'
import PageRoutes from './Layout/PageRoutes'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.min.css'

const App = () =>
  <BrowserRouter>  
    <PageRoutes />
  </BrowserRouter>

export default App
