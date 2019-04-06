import React from 'react'
// import PropTypes from 'prop-types'
import Header from '../../Layout/Header'

const Hero = props => {

  return (
    <>

      <Header />

      <main role="main" className="inner cover">

        <h1 className="font-title">Barbacker</h1>
        
        <a href="/search" className="home menu-item">
          <dt className="home label">{'Find A Recipe'}</dt>
          <dd className="home body">
            {'Quickly Search the Barbacker Database for a Recipe'}
            <em> Perfect for those, "WTF is a _______ moments..." </em>
          </dd>
        </a>

        <a href="/random" className="home menu-item">
          <dt className="home label">{'Get RANDOM'}</dt>
          <dd className="home body">
            {'Get a Random Recipe at the Push of a Button!\n'}
            <em>
              {'Protects Against: "Bartender\'s Choice", "Surprise Me", & "Something Good"'}
            </em>
          </dd>
        </a>

        <a href="/submit" className="home menu-item">
          <dt className="home label">{'Add Your Own'}</dt>
          <dd className="home body">
            {'Quickly Search the Barbacker Database for a Recipe'}
          </dd>
        </a>

        <a href="/search" className="home menu-item">
          <dt className="home label">{'Find A Recipe'}</dt>
          <dd className="home body">
            {'Quickly Search the Barbacker Database for a Recipe'}
          </dd>
        </a>

      </main>

      <footer className="mastfoot mt-auto">
        
        <div className="inner">
          <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
        </div>

      </footer>
    </>
  )
}

export default Hero