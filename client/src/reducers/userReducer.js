export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return state, action.payload;
    case 'FETCH_USER':
      return state, action.payload;
    case 'LOGIN_USER':
      return state, action.payload;
    case 'LOGOUT_USER':
      return state, action.payload;
    default:
      return state;
  }
};
