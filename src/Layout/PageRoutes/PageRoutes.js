import PropTypes from 'prop-types'
import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

const HomePage =   lazy(() => import('../../Pages/HomePage'))
const SearchPage = lazy(() => import('../../Pages/SearchPage'))
const SubmitPage = lazy(() => import('../../Pages/SubmitPage'))

const PageRoutes = ({ children }) => {
  return (
    <Suspense fallback={'Loading...'}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/submit" component={SubmitPage} />
      </Switch>
    </Suspense>
  )
}

PageRoutes.propTypes = { children: PropTypes.node }

export default PageRoutes
