// import logo from './logo.svg'
import React from 'react'
import AppUI from './Layout/AppUI'
import { FocusStyleManager } from '@blueprintjs/core'
import './App.css'

FocusStyleManager.onlyShowFocusOnTabs()

const App = () => <AppUI />

export default App