// import firebase from 'firebase/app';
import { firebaseApp } from '../../firebase/Firebase';

export const TAG_TOGGLE_ADD_MODAL = 'TAG_TOGGLE_ADD_MODAL';
export const TAG_LIST_REQUEST = 'TAG_LIST_REQUEST';
export const TAG_RECEIVE_SUCCESS = 'TAG_RECEIVE_SUCCESS';
export const TAG_REMOVE_SUCCESS = 'TAG_REMOVE_SUCCESS';
export const TAG_LIST_FAILURE = 'TAG_LIST_FAILURE';
export const TAG_LIST_UNSUBSCRIBE = 'TAG_LIST_UNSUBSCRIBE';
export const TAG_ADD_REQUEST = 'TAG_ADD_REQUEST';
export const TAG_ADD_SUCCESS = 'TAG_ADD';
export const TAG_ADD_FAILURE = 'TAG_ADD_FAILURE';
export const TAG_DELETE = 'TAG_DELETE';

/** Firestore collection references */
const tagsCollection = firebaseApp.firestore().collection('tags');
/** ******************** */

/** Subscriptions for Firebase snapshots */
let tagListSubscription = null;
/** ******************** */

const toggleAddModalAction = (toggle) => ({
  type: TAG_TOGGLE_ADD_MODAL,
  toggle,
});

const requestTagListAction = () => ({
  type: TAG_LIST_REQUEST,
});

const receiveTagAction = (tag) => ({
  type: TAG_RECEIVE_SUCCESS,
  tag,
});

const removeTagAction = (tag) => ({
  type: TAG_REMOVE_SUCCESS,
  tag,
});

const tagListErrorAction = (error) => ({
  type: TAG_LIST_FAILURE,
  error,
});

const tagListUnsubscribeAction = () => ({
  type: TAG_LIST_UNSUBSCRIBE,
});

const addTagRequestAction = () => ({
  type: TAG_ADD_REQUEST,
});

const addTagSuccessAction = () => ({
  type: TAG_ADD_SUCCESS,
});

const addTagFailureAction = (error) => ({
  type: TAG_ADD_FAILURE,
  error,
});

export const setToggleAddModal = (toggle) => (dispatch) => {
  dispatch(toggleAddModalAction(toggle));
};

export const getTagList = () => (dispatch) => {
  dispatch(requestTagListAction());

  tagListSubscription = tagsCollection
    .orderBy('parent')
    .onSnapshot(
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            // Add tag action
            dispatch(receiveTagAction(change.doc));
          } else if (change.type === 'modified') {
            // Modify tag action
          } else if (change.type === 'removed') {
            // Remove tag action
            dispatch(removeTagAction(change.doc));
          }
        });
      },
      (error) => {
        dispatch(tagListErrorAction(error));
      },
    );
};

export const unsubscribeGetTagList = () => (dispatch) => {
  if (tagListSubscription !== null) {
    tagListSubscription(); // Stop listening to changes
    dispatch(tagListUnsubscribeAction());
  }
};

export const addTag = (newTag) => (dispatch) => {
  dispatch(addTagRequestAction());

  tagsCollection
    .add({
      name: newTag.name,
      description: newTag.description,
      parent: newTag.parent,
      attributes: newTag.attributes,
    })
    .then(() => {
      dispatch(addTagSuccessAction());

      // Add tag to parent reference `child` array
      // tagsCollection.doc(newTag.parentRef).update({
      //   children: firebase.firestore.FieldValue.arrayUnion(tagRef.id),
      // });
    })
    .catch((error) => {
      dispatch(addTagFailureAction(error));
    });
};
