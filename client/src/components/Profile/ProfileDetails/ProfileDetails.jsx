import React from 'react';

const ProfileDetails = ({
  username,
  friends,
  friendRequests,
  sentRequests,
}) => {
  return (
    <div className='profile-details'>
      <div className='profile-nickname'>{username}</div>
      <div className='profile-details_avatar'>
        <img
          src='https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png'
          alt={username}
        />
      </div>
      <div className='profile-details_info'>
        <div className='profile-data'>
          <span className='profile-data-header'>Friends:</span>
          <span className='profile-data-info'>
            {friends ? friends.length : 0}
          </span>
        </div>
        <div className='profile-data'>
          <span className='profile-data-header'>Received Requests:</span>
          <span className='profile-data-info'>
            {friendRequests ? friendRequests.length : 0}
          </span>
        </div>
        <div className='profile-data'>
          <span className='profile-data-header'>Sent Requests:</span>
          <span className='profile-data-info'>
            {sentRequests ? sentRequests.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
