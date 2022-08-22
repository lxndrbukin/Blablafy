import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { userReducer } from './userReducer';
import { usersReducer } from './usersReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: currentUserReducer,
  user: userReducer,
  users: usersReducer,
  form: formReducer,
});
