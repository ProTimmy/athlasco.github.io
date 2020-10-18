import React from 'react'
import './Editor.css'

import { withAuthorization } from '../Session'

const Editor = () => (
  <div>
    <h1>Editor</h1>
  </div>
)

const condition = authUser => !!authUser

export default withAuthorization(condition)(Editor)