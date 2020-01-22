/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import React from 'react'

const RecipeCardList = ({children}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        width: 100vw;
        overflow-y: scroll;
        overflow-x: hidden;
      `}
    >
      {children}
    </div>
  )
}

export default RecipeCardList
