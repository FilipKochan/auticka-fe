export enum TestDifficulty {
  easy = 'easy',
  hard = 'hard',
}

export enum TestLength {
  short = 5,
  normal = 10,
  long = 20,
}

export type NotificationSeverity = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
  open: boolean;
  message: string;
  severity: NotificationSeverity;
  timeout?: number;
}

export interface User {
  id?: number;
  name?: string;
  state: Status;
}

export interface State {
  user: User;
  notification: Notification;
}

export enum Status {
  idle = 'idle',
  success = 'success',
  error = 'error',
  requesting = 'requesting',
}
