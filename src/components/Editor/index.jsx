import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import editorStyles from './editorStyles';
import VideoPlayer from './VideoPlayer';
import TagEditor from './TagEditor';

const Editor = (props) => {
  const { classes } = props;

  return (
    <div className={classes.editor}>
      <TagEditor />
      <VideoPlayer />
    </div>
  );
};

Editor.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(editorStyles)(Editor);
