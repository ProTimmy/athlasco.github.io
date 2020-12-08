import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
  IconButton,
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
    getTagList();
  });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <div className={classes.tagEditor}>
      <div className={'inputArea'}>
        <input
          type='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search' />
        <Tooltip title='Add New Tag'>
          <IconButton
            onClick={() => dispatch(setToggleAddModal(true))}
          ><Add /></IconButton>
        </Tooltip>
      </div>

      <AddTagModal />
    </div>
  );
};

TagEditor.propTypes = {
  dispatch: PropTypes.func,
  classes: PropTypes.any,
};

export default withStyles(
  tagEditorStyles,
)(connect()(TagEditor));
