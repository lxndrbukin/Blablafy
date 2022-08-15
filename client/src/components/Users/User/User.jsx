import React from 'react';
import { NavLink } from 'react-router-dom';

const User = ({
  username,
  userId,
  chats,
  friendRequests,
  sentRequests,
  friends,
  deleteUser,
}) => {
  return (
    <div className='user'>
      <div className='user-id'>{userId}</div>
      <div className='user-info'>
        <div className='user-info_top'>
          <div
            style={{
              backgroundImage:
                "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
            }}
            className='user-avatar'
          ></div>
          <div className='user-username'>{username}</div>
        </div>
        <div className='user-info_bottom'>
          <div className='info'>
            <div className='info-num'>{chats.length}</div>
            <div className='info-header'>Chats</div>
          </div>
          <div className='info'>
            <div className='info-num'>{friendRequests.length}</div>
            <div className='info-header'>Followers</div>
          </div>
          <div className='info'>
            <div className='info-num'>{sentRequests.length}</div>
            <div className='info-header'>Requests</div>
          </div>
          <div className='info'>
            <div className='info-num'>{friends.length}</div>
            <div className='info-header'>Friends</div>
          </div>
        </div>
        <div className='user_buttons'>
          <NavLink to={`/profile/${userId}`}>
            <button className='user_button'>Profile</button>
          </NavLink>
          <button onClick={() => deleteUser(userId)} className='user_button'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default User;
