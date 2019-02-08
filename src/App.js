import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
// import logo from './logo.svg'

import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './App.css'

const HomePage   = lazy(() => import('./Pages/HomePage'))
const SearchPage = lazy(() => import('./Pages/SearchPage'))
const SubmitPage = lazy(() => import('./Pages/SubmitPage'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/submit" component={SubmitPage}/>
      </Switch>
    </Suspense>
  </Router>
)

export default App
