import {
  TAG_TOGGLE_ADD_MODAL,
  TAG_LIST_SUCCESS
} from '../actions'

export const tagsReducer = (
  state = {
    tagList: [],
    addModalToggle: false
  },
  action
) => {
  switch (action.type) {
    case TAG_TOGGLE_ADD_MODAL:
      return {
        ...state,
        addModalToggle: action.toggle
      }
    case TAG_LIST_SUCCESS:
      return {
        ...state,
        tagList: action.tags
      }
    default:
      return state
  }
}