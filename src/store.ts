import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notificationReducer } from './reducers/notificationReducer';
import { userReducer } from './reducers/userReducer';
import thunk from 'redux-thunk';

const store = createStore(
  combineReducers({ user: userReducer, notification: notificationReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
