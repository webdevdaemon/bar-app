import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({title, ...props}) => {
  return (
    <Helmet 
      defaultTitle="barbacker - A Bartender's Best Friend - developed by Charles Morgan"
      titleTemplate="barbacker - %s - developed by: Charles Morgan"
      title={title}
      {...props}
    >
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Helmet>
  )
}

export default Head