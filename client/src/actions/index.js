import axios from 'axios';

export const createUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/register', { ...formValues, chats: [] });
  dispatch({ type: 'CREATE_USER', payload: res.data });
};

export const loginUser = (formValues) => async (dispatch) => {
  const res = await axios.post('/auth', { ...formValues });
  dispatch({ type: 'LOGIN_USER', payload: res.data });
};

export const logoutUser = () => async (dispatch) => {
  const res = await axios.get('/api/logout');
  dispatch({ type: 'LOGOUT_USER', payload: res.data });
};

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: 'FETCH_USER', payload: res.data });
};

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('/api/users');
  dispatch({type: 'FETCH_USERS', payload: res.data});
}
