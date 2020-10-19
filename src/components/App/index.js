import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignInPage from '../SignIn'
import Editor from '../Editor'

import * as ROUTES from '../../constants/routes'
import { withFirebase } from '../Firebase'

const App = (props) => {
  const [authUser, setAuthUser] = useState(null)

  useEffect(() => {
    props.firebase.auth.onAuthStateChanged( authUser => {
      authUser
        ? setAuthUser(authUser)
        : setAuthUser(null)
    })
  })

  return (
    <Router>
      <Navigation authUser={authUser} />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.EDITOR} component={Editor} />
    </Router>
  )
}

export default withFirebase(App)
