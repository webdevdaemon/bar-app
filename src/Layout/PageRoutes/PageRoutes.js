import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const HomePage = lazy(() => import('../../Pages/HomePage'))
const SearchPage = lazy(() => import('../../Pages/SearchPage'))
const SubmitPage = lazy(() => import('../../Pages/SubmitPage'))
const UserAuthPage = lazy(() => import('../../Pages/UserAuthPage'))
const UserAccountPage = lazy(() => import('../../Pages/UserAccountPage'))
const RandomPage = lazy(() => import('../../Pages/RandomPage'))

const PageRoutes = props => {
  return (
    <Suspense fallback={'Loading...'}>
      <Switch>
        <Route {...props} exact path="/"
          component={() => <HomePage/>} />
        <Route {...props} path="/search"
          component={() => <SearchPage/>} />
        <Route {...props} path="/random"
          component={() => <RandomPage/>} />
        <Route {...props} path="/submit"
          component={() => <SubmitPage/>} />
        <Route {...props} path="/auth"
          component={() => <UserAuthPage/>} />
        <Route {...props} path="/user/:id"
          component={() => <UserAccountPage/>} />
      </Switch>
    </Suspense>
  )
}

export default PageRoutes
