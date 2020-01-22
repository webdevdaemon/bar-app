import React from 'react'
import HomePageListItem from '../HomePageListItem/HomePageListItem'
import PropTypes from 'prop-types'

const propTypes = {
  items: PropTypes.array.isRequired,
}

const HomePageList = ({items, ...props}) => {
  return (
    <ul className="home-page-list">
      {items.map(obj => (
        <>{HomePageListItem(obj)}</>
      ))}
    </ul>
  )
}

export default HomePageList

HomePageList.propTypes = propTypes
