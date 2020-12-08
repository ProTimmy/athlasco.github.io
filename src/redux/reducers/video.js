/* eslint-disable import/prefer-default-export */
import {
  VIDEO_HANDLE_FILE,
  VIDEO_PLAY,
  VIDEO_PAUSE,
  VIDEO_SKIP_FORWARDS,
  VIDEO_SKIP_BACKWARDS,
  VIDEO_CLEAR_SELECTION,
  VIDEO_UPLOAD_PROJECT,
  VIDEO_TOGGLE_CLEAR_DIALOG,
} from '../actions';

export const videoReducer = (
  state = {
    videoFilePath: null,
    isPlaying: false,
    clearDialogToggle: false,
  },
  action,
) => {
  switch (action.type) {
    case VIDEO_HANDLE_FILE:
      return {
        ...state,
        videoFilePath: action.videoFilePath,
      };
    case VIDEO_PLAY:
      if (state.videoFilePath != null) {
        return {
          ...state,
          isPlaying: true,
        };
      }

      return state;
    case VIDEO_PAUSE:
      return {
        ...state,
        isPlaying: false,
      };
    case VIDEO_SKIP_FORWARDS:
      return {
        ...state,
      };
    case VIDEO_SKIP_BACKWARDS:
      return {
        ...state,
      };
    case VIDEO_TOGGLE_CLEAR_DIALOG:
      return {
        ...state,
        clearDialogToggle: action.toggle,
      };
    case VIDEO_CLEAR_SELECTION:
      return {
        ...state,
        videoFilePath: null,
      };
    case VIDEO_UPLOAD_PROJECT:
      return state;
    default:
      return state;
  }
};
