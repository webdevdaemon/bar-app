import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '../../Layout/PageWrapper'
import Hero from '../../Components/Hero/Hero'

const HomePage = props => {
  
  return (
    <PageWrapper
      {...props}
      title="home"
      render={
        () => <Hero {...props}/>
      }
    />
  )
}

HomePage.propTypes = {
  match: PropTypes.object, history: PropTypes.object, location: PropTypes.object
}

export default HomePage