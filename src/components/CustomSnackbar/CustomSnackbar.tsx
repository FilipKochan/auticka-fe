import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNotification } from '../../selectors';
import { Alert, Snackbar, SnackbarCloseReason, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { hideNotification } from '../../actions/notificationActions';

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const notification = useSelector(getNotification);

  const handleClose = (_: Event | React.SyntheticEvent<any, Event>, reason: SnackbarCloseReason) => {
    if (reason === 'timeout') {
      closeSnackbar();
    }
  };

  const closeSnackbar = () => dispatch(hideNotification());

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={notification.timeout}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      action={
        <React.Fragment>
          <IconButton size="small" aria-label="close" color="inherit" onClick={closeSnackbar}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      }
    >
      <Alert severity={notification.severity} sx={{ minWidth: '15rem' }} onClose={closeSnackbar}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
