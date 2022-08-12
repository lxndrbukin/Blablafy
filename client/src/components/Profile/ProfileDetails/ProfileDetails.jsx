import React from 'react';
import ProfileDetailsLeft from './ProfileDetailsLeft';
import ProfileDetailsRight from './ProfileDetailsRight';

const ProfileDetails = ({
  username,
  friends,
  friendRequests,
  sentRequests,
  id,
}) => {
  return (
    <div className='profile-info'>
      <ProfileDetailsLeft
        username={username}
        friends={friends}
        id={id}
        friendRequests={friendRequests}
        sentRequests={sentRequests}
      />
      <ProfileDetailsRight
        username={username}
        friends={friends}
        friendRequests={friendRequests}
        sentRequests={sentRequests}
      />
    </div>
  );
};

export default ProfileDetails;
