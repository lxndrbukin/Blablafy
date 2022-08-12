import React from 'react';

const ProfileDetailsRight = ({ username }) => {
  return (
    <div className='profile-info_right-column'>
      <div className='profile-info_box'>
        <div className='profile-info_box-line'>
          <div className='profile-info_name'>{username}</div>
          <div className='profile-info_status'>Set your status</div>
        </div>
        <div className='profile-info_box-line'></div>
      </div>
    </div>
  );
};

export default ProfileDetailsRight;
