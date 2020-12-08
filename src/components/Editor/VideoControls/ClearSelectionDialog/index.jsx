import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core';

import {
  clearFileSelection,
  toggleClearDialog,
} from '../../../../redux/actions';

const ClearSelectionDialog = (props) => {
  const { dispatch, clearDialogToggle } = props;

  const handleClear = () => {
    dispatch(clearFileSelection());
    dispatch(toggleClearDialog(false));
  };

  const handleClose = () => {
    dispatch(toggleClearDialog(false));
  };

  return (
    <Dialog
      open={clearDialogToggle}
      onClose={handleClose}
    >
      <DialogTitle>Clear File Selection?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This will clear the current file selection and \
          wipe all current tags associated with this project.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClear} color='primary'>Clear</Button>
        <Button onClick={handleClose} color='primary' autoFocus>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

ClearSelectionDialog.propTypes = {
  dispatch: PropTypes.func,
  clearDialogToggle: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  clearDialogToggle: state.video.clearDialogToggle,
});

export default connect(mapStateToProps)(ClearSelectionDialog);
