import React from "react"
import PropTypes from "prop-types"

const AutoSuggestResult = ({children, ...props}) => {

  return (
    <div className="autosuggestresult">
      {'_____ AutoSuggestResult ______'}
    </div>
  )
}

AutoSuggestResult.propTypes = { children: PropTypes.node }

export default AutoSuggestResult