import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
  IconButton,
  TextField,
  Tooltip,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { setToggleAddModal, getTagList } from '../../../redux/actions';

import AddTagModal from './AddTagModal';
import tagEditorStyles from './tagEditorStyles';

const TagEditor = (props) => {
  const { classes, dispatch } = props;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getTagList());
  }, []);

  // useEffect(() => {
  //   console.log(searchTerm);
  // }, [searchTerm]);

  return (
    <div className={classes.tagEditor}>
      <AddTagModal />

      <div className={'inputArea'}>
        <TextField
          label='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <Tooltip title='Add New Tag'>
          <IconButton
            onClick={() => dispatch(setToggleAddModal(true))}
          ><Add /></IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

TagEditor.propTypes = {
  dispatch: PropTypes.func,
  classes: PropTypes.any,
  tagList: PropTypes.array,
};

export default withStyles(
  tagEditorStyles,
)(connect()(TagEditor));
