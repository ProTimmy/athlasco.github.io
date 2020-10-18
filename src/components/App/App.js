import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Navigation from '../navigation/Navigation'
import Landing from '../landing/Landing'
import AccountPage from '../Account'
import SignInPage from '../SignIn/SignIn'
import PasswordForgetPage from '../PasswordForget'
import Editor from '../editor/Editor'

import * as ROUTES from '../../constants/routes'
import { withAuthentication } from '../Session'

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.EDITOR} component={Editor} />
    </div>
  </Router>
)

export default withAuthentication(App)
