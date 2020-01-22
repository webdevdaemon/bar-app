import React from 'react'
// import PropTypes from 'prop-types'
import RecipeCard from '../RecipeCard'
import RecipeCardList from '../RecipeCardList'


const AutoSuggestList = ({ results, ...props }) => {
  console.log(results)
  return (
    <RecipeCardList>
      {
        !results[0]
        ? <h3>{'No Matching Recipes'}</h3>
        : results.map((recipe, i) => {
          return (
            <RecipeCard key={i} recipe={recipe}/>
          )
        })
      }
    </RecipeCardList>
  )
}

export default AutoSuggestList
