import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentUser, logoutUser } from '../../../actions';
import TopBarUserMenu from './TopBarUserMenu';

class TopBarUser extends React.Component {
  state = {
    user: {},
    showMenu: false,
  };

  componentDidMount = () => {
    this.props.fetchCurrentUser();
    this.setState({ user: this.props.currentUser });
  };

  auth = () => {
    const { currentUser } = this.props;
    if (currentUser && currentUser !== 'Logged Out') {
      return (
        <div
          onClick={() => {
            this.props.logoutUser();
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

  miniProfile = () => {
    const { currentUser } = this.props;
    const { showMenu } = this.state;
    return (
      <div className='top-bar_user-profile-wrapper'>
        <div
          className='top-bar_user-profile-container'
          onMouseOver={() => this.setState({ showMenu: true })}
          onMouseOut={() => this.setState({ showMenu: false })}
        >
          <div className='top-bar_user-profile'>
            <div
              className='top-bar_user-profile_avatar'
              style={{
                backgroundImage:
                  "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
              }}
            ></div>
          </div>
          <TopBarUserMenu showMenu={showMenu} userId={currentUser.userId} />
        </div>
        {this.auth()}
      </div>
    );
  };

  render() {
    return this.miniProfile();
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { fetchCurrentUser, logoutUser })(
  TopBarUser
);
