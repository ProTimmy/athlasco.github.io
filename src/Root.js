import React from 'react'

import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'
import configureStore from './configureStore'

const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Root