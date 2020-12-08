import React from 'react'
import { withStyles } from '@material-ui/core'

import editorStyles from './editorStyles'
import VideoPlayer from './VideoPlayer'
import TagEditor from './TagEditor'

const Editor = (props) => {
  const { classes } = props

  return (
    <div className={classes.editor}>
      <TagEditor />
      <VideoPlayer />
    </div>
  )
}

export default withStyles(editorStyles)(Editor)