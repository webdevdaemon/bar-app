import normalize from './normalizeDrinkObject'
import axios from 'axios'

export default (function() {
  
  const normalizeDrinkList = prom =>
    prom.then(
        ({ data: { drinks } }) => drinks)
      .then(
        response => response.length    
          ? response.map(item => normalize(item))    
          : [{ name: 'no drink matches', id: -1 }],
        error => new Error(error)
      )
    
  const listSearchResults = queryStr =>
    normalizeDrinkList(axios(queryStr))
      .then(response => response, error => new Error(error))
    
    const autoSearch = queryStr => {
      let searchResults
      return listSearchResults(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${queryStr}`)
        .then(
          r => {
            searchResults = r
            return searchResults
          }, error => new Error(error))
        .then(out => out)
    }
  
  return (x) => autoSearch(x)
})()
