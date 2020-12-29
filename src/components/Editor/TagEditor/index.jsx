import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
  IconButton,
  TextField,
  Tooltip,
  InputAdornment,
} from '@material-ui/core';
import {
  Add,
  Search,
} from '@material-ui/icons';

import { setToggleAddModal } from '../../../redux/actions';

import AddTagModal from './AddTagModal';
import TagTree from './TagTree';

import tagEditorStyles from './tagEditorStyles';

const TagEditor = (props) => {
  const { classes, dispatch } = props;
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   console.log(searchTerm);
  // }, [searchTerm]);

  return (
    <div className={classes.tagEditor}>
      <AddTagModal />

      <div className={classes.searchArea}>
        <TextField
          variant='outlined'
          className={classes.searchBox}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            ),
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <Tooltip title='Add New Tag'>
          <IconButton
            onClick={() => dispatch(setToggleAddModal(true))}
          ><Add /></IconButton>
        </Tooltip>
      </div>

      <TagTree />
    </div>
  );
};

TagEditor.propTypes = {
  dispatch: PropTypes.func,
  classes: PropTypes.object.isRequired,
  tagList: PropTypes.array,
};

export default withStyles(
  tagEditorStyles,
)(connect()(TagEditor));
