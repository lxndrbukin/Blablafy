import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions';
import { NavLink } from 'react-router-dom';

const TopBarUserMenu = ({ userId, showMenu, logoutUser }) => {
  const menuButtons = () => {
    if (userId) {
      return (
        <div className='top-bar_user-profile-menu_buttons'>
          <NavLink className='profile-button' to={`/profile/${userId}`}>
            <button>Profile</button>
          </NavLink>
          <NavLink
            className='profile-button'
            to={`/profile/${userId}/settings`}
          >
            <button>Settings</button>
          </NavLink>
          <div className='profile-button'>
            <button onClick={() => logoutUser()}>Log Out</button>
          </div>
        </div>
      );
    } else {
      return (
        <div className='top-bar_user-profile-menu_buttons'>
          <NavLink className='profile-button' to='/auth'>
            <button>Log In</button>
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div
      className='top-bar_user-profile-menu'
      style={showMenu ? { display: 'block' } : { display: 'none' }}
    >
      {menuButtons()}
    </div>
  );
};

export default connect(null, { logoutUser })(TopBarUserMenu);
