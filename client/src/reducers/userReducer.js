export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return state, action.payload;
    case 'FETCH_CURRENT_USER':
      return state, action.payload;
    case 'LOGIN_USER':
      return state, action.payload;
    case 'LOGOUT_USER':
      return state, action.payload;
    default:
      return state;
  }
};
