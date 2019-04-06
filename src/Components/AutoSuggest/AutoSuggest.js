import React from 'react'
import { FormGroup } from 'reactstrap'

import AutoSuggestInput from '../AutoSuggestInput'
import AutoSuggestList from '../AutoSuggestList'

const AutoSuggest = ({ handleChange, query, results }) => {

  console.log('results @ AutoSuggest = ', results)

  return (
    <div className="autosuggest">
      <FormGroup>
        <AutoSuggestInput query={query} handleChange={handleChange} />
        <AutoSuggestList results={results} />  
      </FormGroup>
    </div>
  )
}

export default AutoSuggest