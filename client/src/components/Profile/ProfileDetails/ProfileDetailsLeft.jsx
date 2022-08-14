import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ProfileDetailsLeft = ({
  username,
  friends,
  friendRequests,
  sentRequests,
  id,
  currentUser,
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
    if (
      currentUser &&
      currentUser.userId !== parseInt(id) &&
      !sentRequests.map((request) => request.username).includes(username)
    ) {
      console.log(id);
      return <button className='profile-info_button'>Add Friend</button>;
    } else if (!currentUser) {
      return;
    } else if (
      sentRequests.map((request) => request.username).includes(username) &&
      currentUser.userId !== parseInt(id)
    ) {
      return <button className='profile-info_button'>Friend</button>;
    }
    // return sentRequests.map((request) => {
    //   if (currentUser.userId !== parseInt(id)) {
    //     return <button className='profile-info_button'>Friend</button>;
    //   }
    // });
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

export default connect(mapStateToProps)(ProfileDetailsLeft);
