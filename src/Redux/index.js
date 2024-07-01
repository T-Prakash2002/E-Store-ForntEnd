
import { combineReducers } from 'redux';

import { authReducer } from './Reducer';

export const reducer = combineReducers({
  auth: authReducer,
});
