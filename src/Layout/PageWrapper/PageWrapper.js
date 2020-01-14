import React from 'react'
// import PropTypes from 'prop-types'
import Head from 'react-helmet'
import Header from '../Header/Header'
import Footer from '../Footer/index'

/**
 * @description Re-usable Page Container w/MetaData, Header, NavMenu, & Footer
 * included. 
 * @param {*} props
 * @returns ReactComponent
 */
const PageWrapper = props => {
  
  return !props.render ? (
    <>
      <Head title={props.title} />
      <div className="pagewrapper">
        <Header {...props} />
        <main className={`page ${props.className}`}>
          {props.children}
        </main>     
        <Footer />
      </div>
    </>
  ) : (
    <>
      <Head title={props.title} />
      <div className="pagewrapper">
        {props.render()}
      </div>
    </>
  )
}

export default PageWrapper