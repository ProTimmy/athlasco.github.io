import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../../redux/actions'

import Button from '@material-ui/core/Button'

const SignOutButton = (props) => {
  const handleSignOut = () => {
    const { dispatch } = props

    dispatch(logoutUser())
  }

  return (
    <Button
      type='button'
      color='inherit'
      onClick={handleSignOut}
    >Sign Out</Button>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  }
}

export default connect(mapStateToProps)(SignOutButton)