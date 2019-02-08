import React from 'react'
import PropTypes from 'prop-types'

const HomePage = ({children, ...props}) => {

  return (
    <div className="homepage">
      {'_____ HomePage ______'}
      {children}
    </div>
  )
}

HomePage.propTypes = { children: PropTypes.node }

export default HomePage