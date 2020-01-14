import React from 'react'
import PropTypes from 'prop-types'
import RecipeCard from '../RecipeCard'
import RecipeCardList from '../RecipeCardList'


const AutoSuggestList = ({ results, ...props }) => {

  return (
    <ListGroup>
      {!results || !results.length
        ? <h3>{'No Matching Recipes'}</h3>
        : results.map((recipe, i) => <RecipeCard i={i} recipe={recipe}/>)
      }
    </ListGroup>
  )
}

export default AutoSuggestList
