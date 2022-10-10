export const chatsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CHATS':
      return state, action.payload;
    case 'SEND_CHAT_MESSAGE':
      return state, action.payload;
    default:
      return state;
  }
};
