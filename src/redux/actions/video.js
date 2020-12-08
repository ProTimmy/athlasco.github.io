export const VIDEO_HANDLE_FILE = 'VIDEO_HANDLE_FILE';
export const VIDEO_PLAY = 'VIDEO_PLAY';
export const VIDEO_PAUSE = 'VIDEO_PAUSE';
export const VIDEO_SKIP_FORWARDS = 'VIDEO_SKIP_FORWARDS';
export const VIDEO_SKIP_BACKWARDS = 'VIDEO_SKIP_BACKWARDS';
export const VIDEO_TOGGLE_CLEAR_DIALOG = 'VIDEO_TOGGLE_CLEAR_DIALOG';
export const VIDEO_CLEAR_SELECTION = 'VIDEO_CLEAR_SELECTION';
export const VIDEO_UPLOAD_PROJECT = 'VIDEO_UPLOAD_PROJECT';

const videoHandleFileAction = (videoFilePath) => ({
  type: VIDEO_HANDLE_FILE,
  videoFilePath,
});

const playVideoAction = () => ({
  type: VIDEO_PLAY,
});

const pauseVideoAction = () => ({
  type: VIDEO_PAUSE,
});

const skipForwardsAction = () => ({
  type: VIDEO_SKIP_FORWARDS,
});

const skipBackwardsAction = () => ({
  type: VIDEO_SKIP_BACKWARDS,
});

const videoToggleClearDialogAction = (toggle) => ({
  type: VIDEO_TOGGLE_CLEAR_DIALOG,
  toggle,
});

const clearFileSelectionAction = () => ({
  type: VIDEO_CLEAR_SELECTION,
});

const uploadVideoProjectAction = () => ({
  type: VIDEO_UPLOAD_PROJECT,
});

export const setVideoFile = (videoFilePath) => (dispatch) => {
  dispatch(videoHandleFileAction(videoFilePath));
};

export const playVideo = () => (dispatch) => {
  dispatch(playVideoAction());
};

export const pauseVideo = () => (dispatch) => {
  dispatch(pauseVideoAction());
};

export const skipForwards = () => (dispatch) => {
  dispatch(skipForwardsAction());
};

export const skipBackwards = () => (dispatch) => {
  dispatch(skipBackwardsAction());
};

export const toggleClearDialog = (toggle) => (dispatch) => {
  dispatch(videoToggleClearDialogAction(toggle));
};

export const clearFileSelection = () => (dispatch) => {
  dispatch(clearFileSelectionAction());
};

export const uploadVideoProject = () => (dispatch) => {
  dispatch(uploadVideoProjectAction());
};
