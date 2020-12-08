export const VIDEO_HANDLE_FILE = "VIDEO_HANDLE_FILE"
export const VIDEO_PLAY = "VIDEO_PLAY"
export const VIDEO_PAUSE = "VIDEO_PAUSE"
export const VIDEO_SKIP_FORWARDS = "VIDEO_SKIP_FORWARDS"
export const VIDEO_SKIP_BACKWARDS = "VIDEO_SKIP_BACKWARDS"
export const VIDEO_TOGGLE_CLEAR_DIALOG = "VIDEO_TOGGLE_CLEAR_DIALOG"
export const VIDEO_CLEAR_SELECTION = "VIDEO_CLEAR_SELECTION"
export const VIDEO_UPLOAD_PROJECT = "VIDEO_UPLOAD_PROJECT"

const videoHandleFileAction = videoFilePath => {
  return {
    type: VIDEO_HANDLE_FILE,
    videoFilePath
  }
}

const playVideoAction = () => {
  return {
    type: VIDEO_PLAY
  }
}

const pauseVideoAction = () => {
  return {
    type: VIDEO_PAUSE
  }
}

const skipForwardsAction = () => {
  return {
    type: VIDEO_SKIP_FORWARDS
  }
}

const skipBackwardsAction = () => {
  return {
    type: VIDEO_SKIP_BACKWARDS
  }
}

const videoToggleClearDialogAction = (toggle) => {
  return {
    type: VIDEO_TOGGLE_CLEAR_DIALOG,
    toggle: toggle
  }
}

const clearFileSelectionAction = () => {
  return {
    type: VIDEO_CLEAR_SELECTION
  }
}

const uploadVideoProjectAction = () => {
  return {
    type: VIDEO_UPLOAD_PROJECT
  }
}

export const setVideoFile = (videoFilePath) => dispatch => {
  dispatch(videoHandleFileAction(videoFilePath))
}

export const playVideo = () => dispatch => {
  dispatch(playVideoAction())
}

export const pauseVideo = () => dispatch => {
  dispatch(pauseVideoAction())
}

export const skipForwards = () => dispatch => {
  dispatch(skipForwardsAction())
}

export const skipBackwards = () => dispatch => {
  dispatch(skipBackwardsAction())
}

export const toggleClearDialog = (toggle) => dispatch => {
  dispatch(videoToggleClearDialogAction(toggle))
}

export const clearFileSelection = () => dispatch => {
  dispatch(clearFileSelectionAction())
}

export const uploadVideoProject = () => dispatch => {
  dispatch(uploadVideoProjectAction())
}