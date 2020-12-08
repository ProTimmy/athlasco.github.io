import React from 'react'
import { connect } from 'react-redux'
import ReactPlayer from 'react-player'

import { setVideoFile } from '../../../redux/actions'

import { Tooltip } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import PublishIcon from '@material-ui/icons/Publish'

import videoPlayerStyles from './videoPlayerStyles'
import VideoControls from '../VideoControls'

const VideoPlayer = (props) => {
  const { classes, videoFilePath, isPlaying } = props

  const handleVideoFile = (event) => {
    event.preventDefault()
    const { dispatch } = props

    dispatch(
      setVideoFile(URL.createObjectURL(event.target.files[0]))
    )
  }

  const UploadIcon = () => (
    <Tooltip title='Choose video file...'>
      <label className={classes.uploadFile} >
        <PublishIcon fontSize='inherit' />
        <input type='file' accept='video/*' onChange={handleVideoFile} style={{ display: 'none' }} />
      </label>
    </Tooltip>
  )

  return (
    <div className={classes.videoArea}>
      <div className={classes.videoPlayer}>
        { videoFilePath == null
          ? <UploadIcon />
          : <ReactPlayer
              height='100%'
              url={videoFilePath}
              playing={isPlaying}
              pip={false}
              controls={false}
            />
        }
      </div>
      <VideoControls />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    videoFilePath: state.video.videoFilePath,
    isPlaying: state.video.isPlaying
  }
}

export default withStyles(videoPlayerStyles)(connect(mapStateToProps)(VideoPlayer))