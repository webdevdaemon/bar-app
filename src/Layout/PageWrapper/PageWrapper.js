/** @jsx jsx */
import React from 'react'
import {jsx} from '@emotion/core'
import Head from 'react-helmet'
import Header from '../Header/Header'
import {Button} from 'react-bootstrap'
// import PropTypes from 'prop-types'

/**
 * @description Re-usable Page Container w/MetaData, Header, NavMenu, & Footer
 * included.
 * @param {*} props
 * @returns ReactComponent
 */
const PageWrapper = ({children, render, title, ...props}) => {
  return (
    <>
      <Head title={title} />

      <div className="cover-container d-flex h-100 p-0 min-vw-100 flex-column">
        <Header className="masthead mb-auto">
          <div className="inner">
            <nav className="nav nav-masthead justify-content-center">
              <Button>{`<Back`}</Button>
              <h2 className="masthead-brand font-sans">brbckr</h2>
              <Button>{`User`}</Button>
            </nav>
          </div>
        </Header>

        <main role="main" className="inner cover">
          {render ? <>{render(props)}</> : <>{children}</>}
        </main>
      </div>
    </>
  )
}

export default PageWrapper
