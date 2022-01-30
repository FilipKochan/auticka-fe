import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { notificationReducer } from './reducers/notificationReducer';
import { userReducer } from './reducers/userReducer';
import { situationReducer } from './reducers/situationReducer';
import { testReducer } from './reducers/testReducer';
import thunk from 'redux-thunk';
import { testResultReducer } from './reducers/testResultReducer';

const store = createStore(
  combineReducers({
    user: userReducer,
    notification: notificationReducer,
    situation: situationReducer,
    test: testReducer,
    testResult: testResultReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
