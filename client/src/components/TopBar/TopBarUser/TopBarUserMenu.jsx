import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBarUserMenu = ({ userId }) => {
  return (
    <div className='top-bar_user-profile-menu'>
      <div className='top-bar_user-profile-menu_buttons'>
        <NavLink className='profile-button' to={`/profile/${userId}`}>
          Profile
        </NavLink>
        <NavLink className='profile-button' to={`/profile/${userId}/settings`}>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default TopBarUserMenu;
