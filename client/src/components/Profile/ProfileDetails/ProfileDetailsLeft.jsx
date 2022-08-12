import React from 'react';

const ProfileDetailsLeft = ({ username, friends }) => {
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
          <button className='profile-info_button'>Edit Profile</button>
          <button className='profile-info_button'>Add Friend</button>
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

export default ProfileDetailsLeft;
