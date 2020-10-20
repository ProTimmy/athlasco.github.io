import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../Firebase'
import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => (
  <div>
    <h1>Password Forget</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE= {
  email: ''
}

const PasswordForgetFormBase = (props) => {
  const [userInfo, setUserInfo] = useState(INITIAL_STATE)
  const [error, setError] = useState(null)

  const onSubmit = event => {
    const { email } = userInfo

    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setUserInfo(INITIAL_STATE)
      })
      .catch( error => {
        console.log(error)
        setError(error)
      })

    event.preventDefault()
  }

  const onChange = event => {
    const { name, value } = event.target
    setUserInfo((userInfo) => ({...userInfo, [name]: value}))
  }

  const isInvalid = userInfo.email === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={userInfo.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }