import React from 'react'
import AutoSuggestInput from '../AutoSuggestInput'
import AutoSuggestList from '../AutoSuggestList'

const AutoSuggest = ({ handleChange, query, results }) => {

  console.log('results @ AutoSuggest = ', results)

  return (
    <div className="autosuggest">
      <AutoSuggestInput query={query} handleChange={handleChange} />
      <AutoSuggestList results={results} />  
    </div>
  )
}

export default AutoSuggest