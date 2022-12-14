import React from 'react';
import { Placeholder } from '../../assets/Placeholder/Placeholder';

const ProfileDetailsRight = ({
  username,
  firstName,
  lastName,
  email,
  friends,
  friendRequests,
}) => {
  return (
    <div className='profile-info_right-column'>
      <div className='profile-info_box'>
        <div className='profile-info_box-line'>
          <div className='profile-info_name'>
            {firstName ? (
              `${firstName} ${lastName}`
            ) : (
              <Placeholder height='24px' width='200px' />
            )}
          </div>
          <div className='profile-info_status'>Set your status</div>
        </div>
        <div className='profile-info_box-line'>
          <div className='profile-info_details'>
            <div className='profile-info_details-line'>
              <span className='profile-info_details-line-name'>Birthday:</span>
              <span className='profile-info_details-line-info'>03/02/1996</span>
            </div>
            <div className='profile-info_details-line'>
              <span className='profile-info_details-line-name'>City:</span>
              <span className='profile-info_details-line-info'>Birmingham</span>
            </div>
            <div className='profile-info_details-line'>
              <span className='profile-info_details-line-name'>Email:</span>
              <span className='profile-info_details-line-info'>{email}</span>
            </div>
          </div>
        </div>
        <div className='profile-info_details'>
          <div className='profile-info_details-numbers'>
            <div className='profile-info_details-number'>
              <span className='profile-info_details-num'>
                {friends ? (
                  friends.length
                ) : (
                  <Placeholder height='30px' width='30px' />
                )}
              </span>
              <span className='profile-info_details-num-name'>Friends</span>
            </div>
            <div className='profile-info_details-number'>
              <span className='profile-info_details-num'>
                {friendRequests ? (
                  friendRequests.length
                ) : (
                  <Placeholder height='30px' width='30px' />
                )}
              </span>
              <span className='profile-info_details-num-name'>Followers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetailsRight;
