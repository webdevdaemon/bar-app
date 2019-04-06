import React, { useState, useEffect } from 'react'
import getResultsList from '../../_utils/js/searchModule'
import PageWrapper from '../../Layout/PageWrapper'
import AutoSuggest from '../../Components/AutoSuggest/index'

// getResultsList('l') // ?

const SearchPage = props => {
// search query state
  const [query, setQuery] = useState('')
  const handleChange = value => setQuery(value)

// search results state
  const [results, setResults] = useState([])
  const updateResults = prom =>
    !prom.then
      ? setResults(prom)
      : prom.then(res => { setResults(res) },
          error => new Error(error, '@ SearchPage > updateResults'))

// update results on query change
  useEffect(() => {
    if (query.length > 3) {
      getResultsList(query).then(
        results => updateResults(results),
        error => new Error(error, '@ SearchPage > getResultsList'))
      console.log('results @ SearchPage = ', results)
    }}, [query])

  return (
    <PageWrapper title="Recipe Search" className="search">
      <section className="section title">
        <h2>{'Find That Recipe!'}</h2>
        <p>{'Start Typing Below for a List of Possible Matches'}</p>
      </section>

      <section className="section controls">
      </section>
      
      <section className="section content">
        <AutoSuggest
          query={query}
          results={results}
          handleChange={handleChange}
        />
      </section>
    </PageWrapper>
  )
}

export default SearchPage
