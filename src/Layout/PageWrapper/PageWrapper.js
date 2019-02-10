import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/index'

const PageWrapper = ({children, title, ...props}) => {

  return (
    <div className="pagewrapper">
      <Header />
      <main className={`page ${title}`}>
        {children}
      </main>     
      <Footer />
    </div>
  )
}

PageWrapper.propTypes = { children: PropTypes.node }

export default PageWrapper