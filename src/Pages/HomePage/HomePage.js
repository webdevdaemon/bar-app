import React from 'react'
import PropTypes from 'prop-types'
import PageWrapper from '../../Layout/PageWrapper'
import HomePageList from '../../Components/HomePageList'

const items = [
  {
    desc: `Perfect for those, "WTF is a _______ moments..."`,
    path: '/search',
    subtitle: 'Quickly Search the Barbacker Database for a Recipe',
    title: 'Find A Recipe',
  },{
    desc: `Slap "Surprise Me" right in the kisser!`,
    path: '/random',
    subtitle: 'Get a Random Recipe at the Push of a Button!\n',
    title: 'Get RANDOM',
  },{
    desc: `You think you're better than us? `,
    path: `/add`,
    subtitle: `Add a Custom Recipe to the Database`,
    title: `Add Recipe`,
  },{
    subtitle: 'Login, or Create an Account.',
    desc: `We Say "NO!" to Stranger Danger.`,
    title: 'Login/Signup',
    path: '/auth',
  },
]

const HomePage = () => {
  return (
    <PageWrapper
      title="home"
      render={() => {
        return (
          <div className="text-center">
            <h1 className="font-title responsive-text-4">Barbacker</h1>
            <p><em>A bartender's best friend.</em></p>
            <HomePageList items={items}/>
          </div>
        )
      }}
    />
  )
}

HomePage.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object,
}

export default HomePage
