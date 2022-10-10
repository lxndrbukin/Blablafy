import { combineReducers } from 'redux';
import { currentUserReducer } from './currentUserReducer';
import { userReducer } from './userReducer';
import { usersReducer } from './usersReducer';
import { currentChatReducer } from './currentChatReducer';
import { chatsReducer } from './chatsReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  currentUser: currentUserReducer,
  user: userReducer,
  users: usersReducer,
  currentChat: currentChatReducer,
  chats: chatsReducer,
  form: formReducer,
});
