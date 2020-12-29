/* eslint-disable import/prefer-default-export */
import {
  TAG_TOGGLE_ADD_MODAL,
  TAG_RECEIVE_SUCCESS,
} from '../actions';

import TagData from '../../data/TagData';

const createTagObject = (tag) => new TagData({
  id: tag.id,
  name: tag.data().name,
  description: tag.data().description,
  parent: tag.data().parent,
  attributes: tag.data().attributes,
});

const addTagToList = (tagList, newTag) => {
  const modifiedTagList = tagList.concat(newTag);
  const parentTagId = newTag.parent.split('~').filter((val) => val !== '').pop();
  const parentIndex = modifiedTagList.findIndex(
    (tag) => tag.id === parentTagId,
  );

  if (parentIndex >= 0) {
    modifiedTagList[parentIndex] = modifiedTagList[parentIndex].addChild(newTag);
  }

  return modifiedTagList;
};

export const tagsReducer = (
  state = {
    tagList: [],
    addModalToggle: false,
  },
  action,
) => {
  switch (action.type) {
    case TAG_TOGGLE_ADD_MODAL:
      return {
        ...state,
        addModalToggle: action.toggle,
      };
    case TAG_RECEIVE_SUCCESS: {
      const newTag = createTagObject(action.tag);

      const modifiedTagList = (newTag.parent) ? (
        addTagToList(state.tagList, newTag)
      ) : (
        state.tagList.concat(newTag)
      );

      if (state.tagList.filter((tag) => tag.equals(newTag)).length === 0) {
        return {
          ...state,
          tagList: modifiedTagList,
        };
      }

      return state;
    }
    default:
      return state;
  }
};
