import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'

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
