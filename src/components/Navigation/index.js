import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import SignInButton from './SignInButton'
import SignOutButton from './SignOutButton'

import navigationStyles from './navigationStyles'

const Navigation = (props) => {
  const history = useHistory()
  const { classes, isAuthenticated } = props

  const handleRoute = (route) => {
    history.push(route)
  }

  return (
    <AppBar position='static' className={classes.root}>
      { isAuthenticated ? (
        <NavigationAuth
          classes={classes}
          handleRoute={handleRoute} />
      ) : (
        <NavigationNonAuth
          classes={classes}
          handleRoute={handleRoute} />
      )}
    </AppBar>
  )
}

const NavigationAuth = (props) => (
  <Toolbar className={props.classes.root}>
    <div className={props.classes.navigation}>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/')}
      >Home</Button>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/editor')}
      >Editor</Button>
    </div>
    <SignOutButton className={props.classes.signOutButton} />
  </Toolbar>
)

const NavigationNonAuth = (props) => (
  <Toolbar className={props.classes.root}>
    <div className={props.classes.navigation}>
      <Button
        type='button'
        color='inherit'
        onClick={() => props.handleRoute('/')}
      >Home</Button>
    </div>
    <SignInButton className={props.classes.signInButton} />
  </Toolbar>
)

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default withStyles(navigationStyles)(connect(mapStateToProps)(Navigation))