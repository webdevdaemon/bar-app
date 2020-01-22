/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React from 'react'

const __footer_size = '10vh'

const Footer = ({children}) => {

  return (
    <footer css={css`height: ${__footer_size}`}>
      {children}
    </footer>
  )
}

export default Footer