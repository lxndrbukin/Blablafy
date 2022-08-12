import React from 'react';
import ProfileDetailsLeft from './ProfileDetailsLeft';
import ProfileDetailsRight from './ProfileDetailsRight';

const ProfileDetails = ({
  username,
  friends,
  friendRequests,
  sentRequests,
}) => {
  return (
    <div className='profile-info'>
      <ProfileDetailsLeft username={username} friends={friends} />
      <ProfileDetailsRight username={username} />
    </div>
  );
};

export default ProfileDetails;
