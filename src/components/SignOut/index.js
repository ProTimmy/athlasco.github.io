import React from 'react'

import { withFirebase } from '../Firebase'

import './SignOutButton.css'

const SignOutButton = ({ firebase }) => (
  <button
    className='SignOutButton'
    type="button"
    onClick={firebase.doSignOut}
  >
    Sign Out
  </button>
)

export default withFirebase(SignOutButton)