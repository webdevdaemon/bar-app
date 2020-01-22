/** @jsx jsx */
import {css, jsx} from '@emotion/core'
import PropTypes from "prop-types"
import PageWrapper from '../../Layout/PageWrapper'
import Button from 'react-bootstrap/Button'

const RandomPage = ({children, ...props}) => {

  return (
    <PageWrapper className="randompage">
      <div css={css`
        display: block;
      `}>
        <Button>Get Random!</Button>
      </div>
    </PageWrapper>
  )
}

RandomPage.propTypes = { children: PropTypes.node }

export default RandomPage