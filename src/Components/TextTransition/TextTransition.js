import React from 'react'
import PropTypes from 'prop-types'

const className = `text-transition`

function TextTransition({
  as = 'p', text = 'Hover Me!!!', ...props
}) {
  return (
    <>
      {React
        .createElement(as, {
          className, ...props
        }, <>{text}</>
      )}
    </>
  )
}

TextTransition.propTypes = {
  text: PropTypes.string.isRequired,
}

export default TextTransition