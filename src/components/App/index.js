import React from 'react'
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import AccountPage from '../Account'
import Editor from '../Editor'

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session'

const App = () => (
  <div className='App'>
    <Router basename='/'>
      <Navigation />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.EDITOR} component={Editor} />
    </Router>
  </div>
)

export default withAuthentication(App)
