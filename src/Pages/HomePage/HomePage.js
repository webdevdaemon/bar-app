import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '../../Layout/PageWrapper/PageWrapper'
const HomePage = () => {
  
  return (
    <PageWrapper title="home">
      <h1>{'HomePage Goes Here...'}</h1>
    </PageWrapper>
  )
}
HomePage.propTypes = {
  match: PropTypes.object, history: PropTypes.object, location: PropTypes.object
}
export default HomePage