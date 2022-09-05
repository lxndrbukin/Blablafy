import React from 'react';
import ProfileDetailsLeft from './ProfileDetailsLeft';
import ProfileDetailsRight from './ProfileDetailsRight';

const ProfileDetails = ({
  username,
  firstName,
  lastName,
  email,
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
        firstName={firstName}
        lastName={lastName}
        username={username}
        email={email}
        friends={friends}
        friendRequests={friendRequests}
        sentRequests={sentRequests}
      />
    </div>
  );
};

export default ProfileDetails;
