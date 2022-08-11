import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions';
import { NavLink } from 'react-router-dom';

const TopBarUserMenu = ({ username, userId, showMenu, logoutUser }) => {
  const menuButtons = () => {
    if (userId) {
      return (
        <div className='top-bar_user-profile-menu_buttons'>
          <NavLink className='user-profile-link' to={`/profile/${userId}`}>
            <div className='user-profile-menu_info'>
              <div
                className='user-profile-menu_avatar'
                style={{
                  backgroundImage: `url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')`,
                }}
              ></div>
              <span className='user-profile-menu_name'>{username}</span>
            </div>
            <div className='user-profile-menu_arrow'></div>
          </NavLink>
          <NavLink className='user-profile-menu-button' to={`/help`}>
            <i className='fas fa-question-circle'></i>
            <span className='user-profile-menu-button_name'>Help</span>
          </NavLink>
          <NavLink
            className='user-profile-menu-button'
            to={`/profile/${userId}/settings`}
          >
            <i className='fas fa-cog'></i>
            <span className='user-profile-menu-button_name'>Settings</span>
          </NavLink>
          <div
            className='user-profile-menu-button'
            onClick={() => logoutUser()}
          >
            <i className='fas fa-sign-out-alt'></i>
            <span className='user-profile-menu-button_name'>Log Out</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className='top-bar_user-profile-menu_buttons'>
          <NavLink className='user-profile-menu-button' to='/auth'>
            <i className='fas fa-sign-in-alt'></i>
            <span>Log In</span>
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
