import axios from 'axios';

export const createUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/register', {
    ...formValues,
    chats: [],
    friends: [],
    friendRequests: [],
    sentRequests: [],
  });
  dispatch({ type: 'CREATE_USER', payload: res.data });
};

export const deleteUser = (userId) => async (dispatch) => {
  const res = await axios.post(`/api/users/${userId}`, {
    userId,
    deleteUser: true,
  });
  dispatch({ type: 'DELETE_USER', payload: res.data });
};

export const loginUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/authorize', { ...formValues });
  dispatch({ type: 'LOGIN_USER', payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/logout');
  dispatch({ type: 'LOGOUT_USER', payload: res.data });
};

export const fetchCurrentUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_CURRENT_USER', payload: res.data });
};

export const fetchUser = (userId) => async (dispatch) => {
  const res = await axios.get(`/api/user/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('/api/users');
  dispatch({ type: 'FETCH_USERS', payload: res.data });
};

export const searchForUsers = (searchRequest) => async (dispatch) => {
  const res = await axios.get(`/api/users/${searchRequest}`);
  dispatch({ type: 'SEARCH_FOR_USERS', payload: res.data });
};

export const sendFriendRequest = (userId, user) => async (dispatch) => {
  const res = await axios.put('/api/current_user', {
    userId,
    user,
    request: '$push',
    friend: false,
  });
  dispatch({ type: 'SEND_REQUEST', payload: res.data });
};

export const receiveFriendRequest =
  (userId, currentUser) => async (dispatch) => {
    const res = await axios.put(`/api/users`, {
      userId,
      currentUser,
      request: '$push',
      friend: false,
    });
    dispatch({ type: 'RECEIVE_REQUEST', payload: res.data });
  };

export const removeSentRequest = (userId, currentUser) => async (dispatch) => {
  const res = await axios.put('/api/users', {
    userId,
    currentUser,
    request: '$pull',
  });
  dispatch({ type: 'REMOVE_SENT_REQUEST', payload: res.data });
};

export const removeFriendRequest = (userId, user) => async (dispatch) => {
  const res = await axios.put(`/api/current_user`, {
    userId,
    user,
    request: '$pull',
  });
  dispatch({ type: 'REMOVE_FRIEND_REQUEST', payload: res.data });
};

export const addFriendToCurrentUser = (userId, user) => async (dispatch) => {
  const res = await axios.put(`/api/current_user`, {
    userId,
    user,
    request: '$push',
    friend: true,
  });
  dispatch({ type: 'ADD_FRIEND_TO_CURRENT_USER', payload: res.data });
};

export const addFriendToUser = (userId, currentUser) => async (dispatch) => {
  const res = await axios.put(`/api/users`, {
    userId,
    currentUser,
    request: '$push',
    friend: true,
  });
  dispatch({ type: 'ADD_FRIEND_TO_USER', payload: res.data });
};
