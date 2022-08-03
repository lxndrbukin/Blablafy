import React from 'react';

const TopBarUser = () => {
  return (
    <div className='top-bar_user-profile'>
      <div
        className='top-bar_user-profile_avatar'
        style={{
          backgroundImage:
            "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
        }}
      ></div>
      <div className='top-bar_user-profile_details'>
        <div className='top-bar_user-profile_name'>Name</div>
        <div className='top-bar_user-profile_status'>Status</div>
      </div>
    </div>
  );
};

export default TopBarUser;
