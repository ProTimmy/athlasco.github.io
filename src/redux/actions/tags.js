import { firebaseApp } from '../../firebase/Firebase'

export const TAG_TOGGLE_ADD_MODAL = "TAG_TOGGLE_ADD_MODAL"
export const TAG_LIST_REQUEST = "TAG_LIST_REQUEST"
export const TAG_LIST_SUCCESS= "TAG_LIST_SUCCESS"
export const TAG_LIST_FAILURE = "TAG_LIST_FAILURE"
export const TAG_ADD = "TAG_ADD"
export const TAG_DELETE = "TAG_DELETE"

const toggleAddModalAction = (toggle) => {
  return {
    type: TAG_TOGGLE_ADD_MODAL,
    toggle: toggle
  }
}

const requestTagListAction = () => {
  return {
    type: TAG_LIST_REQUEST
  }
}

const receiveTagListAction = (tags) => {
  return {
    type: TAG_LIST_SUCCESS,
    tags: tags
  }
}

const tagListErrorAction = () => {
  return {
    type: TAG_LIST_FAILURE
  }
}

const addTagAction = () => {
  return {
    type: TAG_ADD
  }
}

export const setToggleAddModal = (toggle) => dispatch => {
  dispatch(toggleAddModalAction(toggle))
}

export const getTagList = () => dispatch => {
  dispatch(requestTagListAction())
  firebaseApp
    .firestore()
    .collection('tags')
    .get()
    .then(tags => {
      dispatch(receiveTagListAction(tags))
    })
    .catch(error => {
      console.log(error)
      dispatch(tagListErrorAction())
    })
}