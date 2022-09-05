import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  sendFriendRequest,
  receiveFriendRequest,
  fetchUser,
} from '../../../actions';

const ProfileDetailsLeft = ({
  username,
  firstName,
  lastName,
  friends,
  id,
  currentUser,
  fetchUser,
  sendFriendRequest,
  receiveFriendRequest,
}) => {
  const renderFriendsList = () => {
    if (friends) {
      return friends.map((friend, idx) => {
        return (
          <NavLink
            onClick={() => fetchUser(friend.userId)}
            key={idx}
            to={`/profile/${friend.userId}`}
          >
            <div className='profile-info_friend'>
              <div
                className='profile-info_friend-avatar'
                style={{
                  backgroundImage:
                    "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
                }}
              ></div>
              <span className='profile-info_friend-name'>
                {friend.firstName}
              </span>
            </div>
          </NavLink>
        );
      });
    }
  };

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
      const checkFriendId = currentUser.friends.some((friend) => {
        if (friend.userId === parseInt(id)) {
          return true;
        }
      });
      if (checkId) {
        return <button className='profile-info_button'>Request Sent</button>;
      } else if (
        !checkId &&
        username !== currentUser.username &&
        !checkFriendId
      ) {
        return (
          <button
            onClick={() => {
              sendFriendRequest(currentUser.userId, {
                userId: parseInt(id),
                username: username,
                firstName: firstName,
                lastName: lastName,
              });
              receiveFriendRequest(id, {
                userId: currentUser.userId,
                username: currentUser.username,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
              });
            }}
            className='profile-info_button'
          >
            Add Friend
          </button>
        );
      } else if (checkFriendId && username !== currentUser.username) {
        return (
          <button className='profile-info_button disabled'>
            <i className='fas fa-check'></i>
            <span>Friends</span>
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
          <NavLink to={`/profile/${id}/friends`}>
            <span className='profile-info_box-header-name'>Friends</span>
            <span className='profile-info_box-header-num'>
              {friends ? friends.length : 0}
            </span>
          </NavLink>
        </div>
        <div className='profile-info_friends'>{renderFriendsList()}</div>
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
  fetchUser,
  sendFriendRequest,
  receiveFriendRequest,
})(ProfileDetailsLeft);
