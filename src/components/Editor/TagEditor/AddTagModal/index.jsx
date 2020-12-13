import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import {
  Autocomplete,
} from '@material-ui/lab';

import { setToggleAddModal } from '../../../../redux/actions';

import addTagModalStyles from './addTagModalStyles';

const AddTagModal = (props) => {
  const [tagName, setTagName] = useState('');
  const [tagDescription, setTagDescription] = useState('');
  const [parentTag, setParentTag] = useState('');
  const [isParentSelectable, setIsParentSelectable] = useState(false);

  const { dispatch, addModalToggle, tagList } = props;

  const handleSave = () => {
    dispatch(setToggleAddModal(false));
  };

  const handleCancel = () => {
    setTagName('');
    setTagDescription('');
    setParentTag('');
    setIsParentSelectable(false);

    dispatch(setToggleAddModal(false));
  };

  const handleSetParentTag = (e, val) => {
    setParentTag(e.target.textContent);
    setIsParentSelectable(val.selectable);
  };

  const isSelectableDisabled = parentTag === '' && !isParentSelectable;

  const isValidForm = tagName === '' || parentTag === '';

  return (
    <Dialog open={addModalToggle}>
      <DialogTitle>Add New Tag</DialogTitle>
      <DialogContent>
        <TextField
          label='Tag Name'
          fullWidth
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
          autoFocus/>
        <TextField
          label='Description'
          fullWidth
          value={tagDescription}
          onChange={(e) => setTagDescription(e.target.value)}
          multiline
          rows={4} />
        <Autocomplete
          options={tagList}
          getOptionLabel={(tag) => tag.name}
          style={{ marginTop: '10px' }}
          onChange={(e, val) => handleSetParentTag(e, val)}
          renderInput={ (params) => (
            <TextField {...params}
              label='Parent Tag'
              value={parentTag}
              variant='outlined' />
          )}
        />
        <FormControlLabel control={
          <Checkbox
            name='selectable'
            disabled={isSelectableDisabled}
            color='primary'/>
        } label='Selectable' />
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
  addModalToggle: PropTypes.bool,
  tagList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  addModalToggle: state.tags.addModalToggle,
  tagList: state.tags.tagList,
});

export default withStyles(addTagModalStyles)(connect(mapStateToProps)(AddTagModal));
