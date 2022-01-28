export enum TestDifficulty {
  easy = 'easy',
  medium = 'medium',
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
  error?: string;
  state: Status;
}

export interface State {
  user: User;
  notification: Notification;
  situation: SituaceState;
  test: Test;
}

export enum Status {
  idle = 'idle',
  success = 'success',
  error = 'error',
  requesting = 'requesting',
}

export interface Auto {
  spawn: number;
  trasa: number;
  rychlost: number;
  prednostnijizda: 0 | 1;
  idauta: number;
}

export interface Odpoved {
  odpoved: string;
  idodpovedi: number;
}

export interface Situace {
  auta: Auto[];
  odpovedi: Odpoved[];
  mapa: number;
  otazka?: string;
}

export interface SituaceState {
  status: Status;
  situace?: Situace;
  errorMsg?: string;
}

export interface Test {
  testLength: number;
}
