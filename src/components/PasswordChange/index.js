import React, { useState } from 'react'

import { withFirebase } from '../Firebase'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: ''
}

const PasswordChangeForm = (props) => {
  const [pwdInfo, setPwdInfo] = useState(INITIAL_STATE)
  const [error, setError] = useState(null)

  const onSubmit = event => {
    const { passwordOne } = pwdInfo

    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setPwdInfo(INITIAL_STATE)
      })
      .catch(error => {
        setError(error)
      })

    event.preventDefault()
  }

  const onChange = event => {
    const { name, value } = event.target
    setPwdInfo((userInfo) => ({...userInfo, [name]: value}))
  }

  const isInvalid = pwdInfo.passwordOne !== pwdInfo.passwordTwo
    || pwdInfo.passwordOne === ''

  return (
    <form onSubmit={onSubmit}>
      <input
        name="passwordOne"
        value={pwdInfo.passwordOne}
        onChange={onChange}
        type="password"
        placeholder="New Password"
      />
      <input
        name="passwordTwo"
        value={pwdInfo.passwordTwo}
        onChange={onChange}
        type="password"
        placeholder="Confirm New Password"
      />
      <button disabled={isInvalid} type="submit">
        Reset My Password
      </button>

      {error && <p>{error.message}</p>}
    </form>
  )
}

export default withFirebase(PasswordChangeForm)