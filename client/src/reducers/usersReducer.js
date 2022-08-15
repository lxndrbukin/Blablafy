export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return state, action.payload;
    case 'DELETE_USER':
      return state, action.payload;
    case 'FETCH_USERS':
      return state, action.payload;
    case 'RECEIVE_REQUEST':
      return state, action.payload;
    default:
      return state;
  }
};
