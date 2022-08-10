import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentUser, logoutUser } from '../../../actions';
import TopBarUserMenu from './TopBarUserMenu';

const TopBarUser = ({ currentUser, logoutUser, fetchCurrentUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchCurrentUser();
    setUser(currentUser);
  }, [user]);

  const auth = () => {
    if (currentUser && currentUser !== 'Logged Out') {
      return (
        <div
          onClick={() => {
            logoutUser();
          }}
          className='auth-button'
        >
          <i className='fas fa-sign-out-alt'></i>
        </div>
      );
    }
    return (
      <Link to='/auth' className='auth-button'>
        <i className='fas fa-sign-in-alt'></i>
      </Link>
    );
  };

  // const userDetails = () => {
  //   if (currentUser) {
  //     <div className='top-bar_user-profile_details'>
  //       <div className='top-bar_user-profile_name'>{currentUser.username}</div>
  //       <div className='top-bar_user-profile_status'>Status</div>
  //     </div>;
  //   }
  // };

  const miniProfile = () => {
    return (
      <div className='top-bar_user-profile-wrapper'>
        <div className='top-bar_user-profile-container'>
          <div className='top-bar_user-profile'>
            <div
              className='top-bar_user-profile_avatar'
              style={{
                backgroundImage:
                  "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
              }}
            ></div>
          </div>
          <TopBarUserMenu userId={currentUser.userId} />
        </div>
        {auth()}
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

export default connect(mapStateToProps, { fetchCurrentUser, logoutUser })(
  TopBarUser
);
