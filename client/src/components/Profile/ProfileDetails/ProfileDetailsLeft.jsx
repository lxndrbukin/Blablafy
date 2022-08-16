import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { sendFriendRequest, receiveFriendRequest } from '../../../actions';

const ProfileDetailsLeft = ({
  username,
  friends,
  friendRequests,
  sentRequests,
  id,
  currentUser,
  sendFriendRequest,
  receiveFriendRequest,
}) => {
  const showEditButton = () => {
    if (currentUser.userId === parseInt(id)) {
      return (
        <NavLink to={`/profile/${id}/edit`}>
          <button className='profile-info_button'>Edit Profile</button>
        </NavLink>
      );
    }
    return;
  };

  const showAddFriendButton = () => {
    if (currentUser.sentRequests) {
      const checkId = currentUser.sentRequests.some((request) => {
        if (request.userId === parseInt(id)) {
          return true;
        }
      });

      if (checkId) {
        return <button className='profile-info_button'>Request Sent</button>;
      } else if (!checkId && username !== currentUser.username) {
        return (
          <button
            onClick={() => {
              sendFriendRequest(currentUser._id, {
                userId: parseInt(id),
                username: username,
              });
              receiveFriendRequest(id, {
                userId: currentUser.userId,
                username: currentUser.username,
              });
            }}
            className='profile-info_button'
          >
            Add Friend
          </button>
        );
      }
    }
  };

  return (
    <div className='profile-info_left-column'>
      <div className='profile-info_box'>
        <div className='profile-info_avatar'>
          <img
            src='https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png'
            alt={username}
          />
        </div>
        <div className='profile-info_buttons'>
          {showEditButton()}
          {showAddFriendButton()}
        </div>
      </div>
      <div className='profile-info_box'>
        <div className='profile-info_box-header'>
          <span className='profile-info_box-header-name'>Friends</span>
          <span className='profile-info_box-header-num'>{friends.length}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  sendFriendRequest,
  receiveFriendRequest,
})(ProfileDetailsLeft);
