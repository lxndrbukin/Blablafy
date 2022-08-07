import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const TopBarUser = ({ currentUser }) => {
  const auth = () => {
    if (currentUser) {
      return (
        <div
          className='top-bar_user-profile_avatar'
          style={{
            backgroundImage:
              "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
          }}
        ></div>
      );
    }
    return (
      <NavLink to='/auth' className='auth-button'>
        <i className='fas fa-sign-in-alt'></i>
      </NavLink>
    );
  };

  const miniProfile = () => {
    return (
      <div className='top-bar_user-profile'>
        {auth()}
        {/* <div className='top-bar_user-profile_details'>
          <div className='top-bar_user-profile_name'>Name</div>
          <div className='top-bar_user-profile_status'>Status</div>
        </div> */}
      </div>
    );
  };

  return miniProfile();
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(TopBarUser);
