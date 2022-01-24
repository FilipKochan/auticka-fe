import { HIDE_NOTIFICATION, SHOW_NOTIFICATION, UPDATE_NOTIFICATION } from '../constants';
import { NotificationSeverity } from '../types';

export const showNotification = (message: string, severity: NotificationSeverity, timeout?: number) => ({
  type: SHOW_NOTIFICATION,
  payload: { message, severity, timeout },
});

export const updateNotification = (message: string) => ({
  type: UPDATE_NOTIFICATION,
  payload: { message },
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});
