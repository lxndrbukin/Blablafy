import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { usersReducer } from './usersReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: userReducer,
  users: usersReducer,
  form: formReducer,
});
