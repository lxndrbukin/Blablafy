import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { usersReducer } from './usersReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: currentUserReducer,
  users: usersReducer,
  form: formReducer,
});
