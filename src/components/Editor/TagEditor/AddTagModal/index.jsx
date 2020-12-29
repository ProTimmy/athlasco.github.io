/* eslint-disable no-useless-return */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import {
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Tooltip,
  IconButton,
} from '@material-ui/core';
import {
  Add,
  Delete,
} from '@material-ui/icons';
import {
  Autocomplete,
} from '@material-ui/lab';

import TagData from '../../../../data/TagData';

import { addTag, setToggleAddModal } from '../../../../redux/actions';

import addTagModalStyles from './addTagModalStyles';

const AddTagModal = (props) => {
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const [parentTag, setParentTag] = useState('');
  const [tagAttributes, setTagAttribute] = useState([]);

  const isValidForm = tagName === '' || parentTag === '';

  const {
    classes,
    dispatch,
    addModalToggle,
    tagList,
  } = props;

  const clearState = () => {
    setTagName('');
    setTagDescription('');
    setParentTag('');
    setTagAttribute([]);
  };

  const handleSave = () => {
    let newTag = new TagData({
      name: tagName,
      description: tagDescription,
      parent: parentTag,
    });

    // Check if any attributes are set with less than 2 options
    let isValidSave = true;
    if (tagAttributes.length !== 0) {
      tagAttributes.forEach((attr) => {
        if (attr.attributeOptions.length < 2) {
          handleEnableAttributeError(attr);
          isValidSave = false;
        } else {
          const newAttribute = [...newTag.attributes].concat({
            name: attr.attributeName,
            options: attr.attributeOptions,
          });
          newTag = newTag.copy({ attributes: newAttribute });
        }
      });
    }

    isValidSave = isValidSave && parentTag !== '';

    if (isValidSave) {
      dispatch(addTag(newTag));

      clearState();
      dispatch(setToggleAddModal(false));
    }
  };

  const handleCancel = () => {
    clearState();

    dispatch(setToggleAddModal(false));
  };

  const handleSetParentTag = (val) => {
    if (val !== null) {
      if (val.parent) {
        setParentTag(`${val.parent}~${val.id}`);
      } else {
        setParentTag(val.id);
      }
    } else {
      setParentTag('');
    }
  };

  const handleAddAttribute = () => {
    setTagAttribute(tagAttributes.concat({
      id: uuidv4(),
      error: false,
      attributeName: '',
      attributeOptions: [],
    }));
  };

  const handleEnableAttributeError = (attribute) => {
    const attributes = [...tagAttributes];
    const attrIndex = tagAttributes.findIndex((attr) => attr.id === attribute.id);

    attributes[attrIndex].error = true;

    setTagAttribute(attributes);
  };

  const handleChangeAttributeName = (id, e) => {
    const attributes = [...tagAttributes];
    const attrIndex = tagAttributes.findIndex((attr) => attr.id === id);

    attributes[attrIndex].attributeName = e.target.value;

    setTagAttribute(attributes);
  };

  const handleChangeAttributeOption = (id, value, type) => {
    const attributes = [...tagAttributes];
    const attrIndex = tagAttributes.findIndex((attr) => attr.id === id);

    switch (type) {
      case 'create-option':
        attributes[attrIndex].error = false;
        attributes[attrIndex].attributeOptions = value;
        break;
      case 'remove-option':
        attributes[attrIndex].attributeOptions = value;
        break;
      case 'clear':
        attributes[attrIndex].attributeOptions = [];
        break;
      default:
        // Do nothing
        break;
    }

    setTagAttribute(attributes);
  };

  const handleRemoveAttribute = (id) => {
    setTagAttribute(tagAttributes.filter((attr) => attr.id !== id));
  };

  return (
    <Dialog open={addModalToggle}>
      <DialogTitle>Add New Tag</DialogTitle>
      <DialogContent>
        <TextField
          className={classes.tagName}
          label='Tag Name'
          variant='outlined'
          fullWidth
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          autoFocus/>
        <TextField
          className={classes.tagDescription}
          label='Description'
          variant='outlined'
          fullWidth
          value={tagDescription}
          onChange={(e) => setTagDescription(e.target.value)}
          multiline
          rows={4} />
        <Autocomplete
          className={classes.parentTag}
          options={tagList}
          getOptionLabel={(tag) => tag.name}
          onChange={(_, val) => handleSetParentTag(val)}
          renderInput={ (params) => (
            <TextField {...params}
              label='Parent Tag'
              value={parentTag.name}
              variant='outlined' />
          )}
        />
        { tagAttributes.map((attr) => (
          <div key={attr.id} className={classes.attribute}>
            <Tooltip title='Delete Attribute'>
              <IconButton
                className={classes.attributeDeleteIcon}
                onClick={() => handleRemoveAttribute(attr.id)}
                disableRipple
              ><Delete /></IconButton>
            </Tooltip>
            <TextField
              label='Attribute Name'
              error={attr.error}
              helperText={attr.error ? 'Must have at least two options' : ''}
              value={attr.attributeName}
              onChange={(e) => handleChangeAttributeName(attr.id, e)}
              variant='outlined' />
            <Autocomplete
              className={classes.attributeOptions}
              options={[]}
              onChange={(_, val, type) => handleChangeAttributeOption(attr.id, val, type)}
              renderInput={ (params) => (
                <TextField {...params}
                  label='Options'
                  variant='outlined' />
              )}
              multiple
              freeSolo />
          </div>
        ))}
        <Button
          variant='text'
          color='primary'
          fullWidth
          style={{ marginTop: '10px', marginBottom: '10px' }}
          onClick={handleAddAttribute}
          startIcon={<Add />}>Add Attribute</Button>
        <DialogActions>
          <Button disabled={isValidForm} onClick={handleSave} color='primary'>Save</Button>
          <Button onClick={handleCancel} color='primary'>Cancel</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

AddTagModal.propTypes = {
  dispatch: PropTypes.func,
  classes: PropTypes.object.isRequired,
  addModalToggle: PropTypes.bool,
  tagList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  addModalToggle: state.tags.addModalToggle,
  tagList: state.tags.tagList,
});

export default withStyles(
  addTagModalStyles,
)(connect(mapStateToProps)(AddTagModal));
