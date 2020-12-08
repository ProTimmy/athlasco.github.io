import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { connect }from 'react-redux'

import ProtectedRoute from './components/ProtectedRoute'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Login from './components/Login'
import Editor from './components/Editor'

const App = (props) => {
  const { isAuthenticated, isVerifying } = props

  return (
    <div className='App'>
      <Navigation />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/login" component={Login} />
        <ProtectedRoute
          path="/editor"
          component={Editor}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  }
}

export default connect(mapStateToProps)(App)