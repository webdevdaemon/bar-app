import React from "react"
import PropTypes from "prop-types"

const RandomPage = ({children, ...props}) => {

  return (
    <div className="randompage">
      {'_____ RandomPage ______'}
    </div>
  )
}

RandomPage.propTypes = { children: PropTypes.node }

export default RandomPage