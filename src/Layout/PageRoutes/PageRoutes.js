import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import HomePage from '../Pages/HomePage'
import SearchPage from '../Pages/SearchPage'
import SubmitPage from '../Pages/SubmitPage'

const PageRoutes = ({children, ...props}) => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomePage}/>
      <Route path="/search" component={SearchPage}/>
      <Route path="/submit" component={SubmitPage}/>
    </BrowserRouter>
  )
}

PageRoutes.propTypes = { children: PropTypes.node }

export default PageRoutes