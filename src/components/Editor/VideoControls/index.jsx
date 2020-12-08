/* eslint-disable no-console */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import {
  IconButton,
  Toolbar,
  Tooltip,
} from '@material-ui/core';

import {
  PlayArrow,
  Pause,
  Forward10,
  Replay10,
  Clear,
  CloudUpload,
} from '@material-ui/icons';

import {
  playVideo,
  pauseVideo,
  skipForwards,
  skipBackwards,
  toggleClearDialog,
} from '../../../redux/actions';
import ClearSelectionDialog from './ClearSelectionDialog';

import videoControlStyles from './videoControlStyles';

const VideoControls = (props) => {
  const {
    classes, dispatch, videoFilePath, isPlaying, clearDialogToggle,
  } = props;

  return (
    <div className={classes.controls}>
      <Toolbar className={classes.controlBar}>
        <Tooltip title='Go Back 10 secs'>
          <IconButton
            disabled={videoFilePath == null}
            onClick={() => dispatch(skipBackwards())}
          ><Replay10 /></IconButton>
        </Tooltip>
        <Tooltip title='Play'>
          <IconButton
            disabled={isPlaying || videoFilePath == null}
            onClick={() => dispatch(playVideo())}
          ><PlayArrow /></IconButton>
        </Tooltip>
        <Tooltip title='Pause'>
          <IconButton
            disabled={!isPlaying || videoFilePath == null}
            onClick={() => dispatch(pauseVideo())}
          ><Pause /></IconButton>
        </Tooltip>
        <Tooltip title='Go Forwards 10 secs'>
          <IconButton
            disabled={videoFilePath == null}
            onClick={() => dispatch(skipForwards())}
          ><Forward10 /></IconButton>
        </Tooltip>
        <Tooltip title='Clear Video Selection'>
          <IconButton
            disabled={videoFilePath == null}
            onClick={() => dispatch(toggleClearDialog(true))}
          ><Clear /></IconButton>
        </Tooltip>
        <Tooltip title='Upload Video File'>
          <IconButton
            disabled={videoFilePath == null}
            onClick={() => console.log('Upload')}
          ><CloudUpload /></IconButton>
        </Tooltip>
      </Toolbar>
      <ClearSelectionDialog open={clearDialogToggle} />
    </div>
  );
};

VideoControls.propTypes = {
  classes: PropTypes.any,
  dispatch: PropTypes.func,
  videoFilePath: PropTypes.string,
  isPlaying: PropTypes.bool,
  clearDialogToggle: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  videoFilePath: state.video.videoFilePath,
  isPlaying: state.video.isPlaying,
  clearDialogToggle: state.video.clearDialogToggle,
});

export default withStyles(
  videoControlStyles,
)(connect(mapStateToProps)(VideoControls));
