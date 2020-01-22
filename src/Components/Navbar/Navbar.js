// import PropTypes from 'prop-types'
import React, {useState} from 'react'
import {NavLink, useRouteMatch} from 'react-router-dom'
import {NAV_LINKS} from '../../nav-links'
import Navbar from 'react-bootstrap/Navbar'

export default props => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const toggleMenu = () => setIsCollapsed(!isCollapsed)

  const match = useRouteMatch('/:_pathname')

  const renderNavLink = ({label, to, id}) => (
    <NavLink id={id} key={to} to={to} className="cm-nav-link">
      {label}
    </NavLink>
  )

  return (
    <Navbar>
      <ul className="nav-links">
        {NAV_LINKS.map(({to, label}) =>
          renderNavLink({to, label, id: `nav-link-${label}`}),
        )}
        <button onClick={toggleMenu} className="mr-2">
          
        </button>
      </ul>
    </Navbar>
  )
}
