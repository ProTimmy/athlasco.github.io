import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignInPage from '../SignIn'
import Editor from '../Editor'

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session'

const App = () => (
  <Router>
    <Navigation />

    <hr />

    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.EDITOR} component={Editor} />
  </Router>
)

export default withAuthentication(App)
