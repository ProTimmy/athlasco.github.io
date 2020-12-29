import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  withStyles,
} from '@material-ui/core';
import {
  ExpandMore,
  ChevronRight,
} from '@material-ui/icons';
import {
  TreeView,
  TreeItem,
} from '@material-ui/lab';

import tagTreeStyles from './tagTreeStyles';

const TagTree = (props) => {
  const {
    classes,
    tagList,
  } = props;

  const renderTree = (tag) => (
    <TreeItem key={tag.id} nodeId={tag.id} label={tag.name}>
      {tag.children.length > 0 ? tag.children.map((child) => renderTree(child)) : null}
    </TreeItem>
  );

  return (
    <TreeView
      className={classes.tagTree}
      defaultCollapseIcon={<ExpandMore />}
      defaultExpandIcon={<ChevronRight />}
    >
      {tagList.filter((tag) => tag.parent === false).forEach((tag) => {
        renderTree(tag);
      })}
    </TreeView>
  );
};

TagTree.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  tagList: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  tagList: state.tags.tagList,
});

export default withStyles(
  tagTreeStyles,
)(connect(mapStateToProps)(TagTree));
