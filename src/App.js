import React from 'react'
import PageRoutes from './Layout/PageRoutes'
import {BrowserRouter} from 'react-router-dom'
import {AppState} from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => (
  <BrowserRouter>
    <AppState.Provider>
      <PageRoutes />
    </AppState.Provider>
  </BrowserRouter>
)

export default App
