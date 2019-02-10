import React from 'react'
// import PropTypes from 'prop-types'
import Navbar from '../../Components/Navbar'
import { withRouter } from 'react-router-dom'

const Header = props => {

  return (
    <header className="header">
      <Navbar {...props} />
    </header>
  )
}

export default withRouter(Header)