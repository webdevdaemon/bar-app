import {createContext} from 'react'

const AppState = createContext({
  USER: null,
  UI: null,
  DB: null,
  HISTORY: null,
  CACHE: null,
})

const RecipeState = createContext({})

export {AppState, RecipeState}