import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Route } from 'react-router-dom'

import { UL } from '@blueprintjs/core'

const Navbar = ({ match, history, location }) => {
  console.log('---------------')
  console.log({ match, history, location })
  console.log('---------------')

  return (
    <Route path="/navbar"
      render={
        ({ match, location, history }) => (
          <UL className="navbar">
            {
              Object
                .entries({ ...history, ...location, ...match })
                .map(([k, v], i) => (
                  <li style={{display: 'flex',
                    width: '100%',
                    flexDirection: 'center',
                    alignItems: 'space-between',}}
                    key={`00-${i}`}
                  >
                  <div width="25%">
                    <h3> <strong>{`${k}`}</strong> </h3> </div> <div width="75%">
                    <p> <em>{`${v}`}</em> </p>
                  </div>
                </li>
              )
            )}
          </UL>
        )
      }
    />
  )
}

Navbar.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
}

export default Navbar
