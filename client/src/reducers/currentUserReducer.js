export const currentUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return state, action.payload;
    case 'FETCH_CURRENT_USER':
      return state, action.payload;
    case 'LOGIN_USER':
      return state, action.payload;
    case 'LOGOUT_USER':
      return state, action.payload;
    case 'SEND_REQUEST':
      return state, action.payload;
    case 'REMOVE_FRIEND_REQUEST':
      return state, action.payload;
    case 'ADD_FRIEND_TO_CURRENT_USER':
      return state, action.payload;
    default:
      return state;
  }
};
