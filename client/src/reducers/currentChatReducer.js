export const currentChatReducer = (state = null, action) => {
  switch (action.type) {
    case 'CREATE_CHAT':
      return state, action.payload;
    default:
      return state;
  }
};
