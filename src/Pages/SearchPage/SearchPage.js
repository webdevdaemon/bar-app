/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import getResultsList from '../../utils/js/searchModule'
import PageWrapper from '../../Layout/PageWrapper'
import AutoSuggest from '../../Components/AutoSuggest/index'
import {RecipeState} from '../../context'

const SearchPage = props => {
  // search query state
  const [query, setQuery] = useState('')
  const handleChange = e => setQuery(e.target.value)
  // search results state
  const [results, setResults] = useState([])
  const [showModal, setShowModal] = useState(false)

  // update results on query change
  useEffect(() => {
    if (query) {
      getResultsList(query).then(
        r => setResults(r),
        error => 
          new Error(error.message + 
            '\n\n@SearchPage > getResultsList'
          ),
        )
      }
    }, [query])

  return (
    <PageWrapper title="Recipe Search" className="search">
      <section className="section title">
        <h2>{`What'll ya have?`}</h2>
        <p>
          {`Start Typing Below to Begin Your Search...`}
        </p>
      </section>

      <section className="section controls"></section>

      <section className="section content">

        <RecipeState.Provider 
          value={{showModal, setShowModal}}
        >

          <AutoSuggest
            query={query}
            results={results}
            handleChange={handleChange}
            showModal={showModal}
          />

        </RecipeState.Provider>
      </section>
    </PageWrapper>
  )
}

export default SearchPage
