import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Route } from 'react-router-dom'

const LazyRoute = ({ path, isExact, component, render, ...props}) => {
  
  return (
    <Route
      component={component}
      exact={isExact}
      path={path}
      render={render}
    />
  )
}

LazyRoute.propTypes = {
  path: PropTypes.string.isRequired,
  isExact: PropTypes.bool,
  component: PropTypes.node,
  render: PropTypes.func,
}

LazyRoute.defaultProps = {
  path: null,
  isExact: false,
  component: null,
  render: null,
}

export default LazyRoute