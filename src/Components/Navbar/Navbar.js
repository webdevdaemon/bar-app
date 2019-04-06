import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, /*NavbarBrand*/ } from 'reactstrap'
import { NAV_LINKS } from '../../nav-links'

export default props => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  const renderNavLink = ({ label, href, id }) => (
    <NavItem id={id} key={id}>
      <NavLink className="cm-nav-link" href={href}>{label}</NavLink>
    </NavItem>
  )

  return (
    <Route
      path={null}
      render={
        ({ match, location, history }) =>
          <Navbar
            style={{ display: 'flex', justifyContent: 'center' }}
            color="dark"
            dark
          >
            <NavbarToggler onClick={toggle} className="mr-2" size="lg" />
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
                {NAV_LINKS.map(({ href, label }, i) =>
                  renderNavLink({ href, label, id: `nav-link-${i}` }))}
              </Nav>
            </Collapse>
          </Navbar>
      }
    />
  )
} 

// export default NB
