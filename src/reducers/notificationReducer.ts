import { AnyAction } from 'redux';
import {
  HIDE_NOTIFICATION,
  SHOW_NOTIFICATION,
  UPDATE_NOTIFICATION,
} from '../constants';
import { Notification } from '../types';

const initNotificationState: Notification = {
  open: false,
  message: '',
  severity: 'info',
};

export const notificationReducer = (
  state: Notification = initNotificationState,
  action: AnyAction
): Notification => {
  switch (action.type) {
    case SHOW_NOTIFICATION: {
      const { message, severity, timeout } = action.payload;
      return {
        open: true,
        message,
        severity,
        timeout,
      };
    }
    case UPDATE_NOTIFICATION: {
      const { message } = action.payload;
      return {
        ...state,
        message,
      };
    }
    case HIDE_NOTIFICATION: {
      return {
        message: '',
        open: false,
        severity: 'info',
        timeout: undefined,
      };
    }
    default:
      return state;
  }
};
