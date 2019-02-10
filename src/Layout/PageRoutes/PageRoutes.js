import PropTypes from 'prop-types'
import React, { Suspense } from 'react'
import { BrowserRouter as Switch } from 'react-router-dom'
import ROUTES from '../../nav-routes'
import LazyRoute from '../../Components/LazyRoute'

const PageRoutes = props => {
  return (
    <Suspense fallback={'Loading...'}>
      <Switch>
        {ROUTES.map((r, i) => (
          <LazyRoute {...r} key={`ID${r.path}`}/>
        ))}
      </Switch>
    </Suspense>
  )
}

PageRoutes.propTypes = { children: PropTypes.node }

export default PageRoutes
