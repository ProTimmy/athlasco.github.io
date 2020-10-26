import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { PasswordForgetLink } from '../PasswordForget'
import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
    <PasswordForgetLink />
  </div>
)

const INITIAL_STATE = {
  email: '',
  password: ''
}

const SignInFormBase = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_STATE)
  const [error, setError] = useState(null)

  const onSubmit = event => {
    const { email, password } = userInfo

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setUserInfo(INITIAL_STATE)
        props.history.push(ROUTES.EDITOR)
      })
      .catch(error => {
        console.log(error)
        setError(error)
      })

    event.preventDefault()
  }

  const onChange = event => {
    const { name, value } = event.target
    setUserInfo((userInfo) => ({...userInfo, [name]: value}))
  }

  const isInvalid = userInfo.password === '' || userInfo.email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={userInfo.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <input
        name="password"
        value={userInfo.password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
      <button disabled={isInvalid} type="submit">
        Sign In
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

const SignInForm = compose(
  withRouter,
  withFirebase
) (SignInFormBase)

export default SignInPage

export { SignInForm }