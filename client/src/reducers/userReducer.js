export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return state, action.payload;
    case 'FETCH_USER':
      return state, action.payload;
    default:
      return state;
  }
};
