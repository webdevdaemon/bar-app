import React from "react"
import PropTypes from "prop-types"

const AutoSuggestResult = ({children}) => {

  return (
    <div className="autosuggestresult">
      {children}
    </div>
  )
}

AutoSuggestResult.propTypes = { children: PropTypes.node }

export default AutoSuggestResult