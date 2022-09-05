import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrentUser, logoutUser } from '../../../actions';
import TopBarUserMenu from './TopBarUserMenu';

class TopBarUser extends React.Component {
  constructor(props) {
    super(props);
    this.box = React.createRef();
    this.state = {
      showMenu: false,
    };
  }

  handleOutsideClick = (event) => {
    if (this.box && !this.box.current.contains(event.target)) {
      this.setState({ showMenu: false });
    }
  };

  componentDidMount = () => {
    this.props.fetchCurrentUser();
    this.setState({ user: this.props.currentUser });
    document.addEventListener('click', this.handleOutsideClick);
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

  miniProfile = () => {
    const { currentUser } = this.props;
    const { showMenu } = this.state;
    return (
      <div
        className='top-bar_user-profile-wrapper'
        onClick={() => this.setState({ showMenu: !showMenu })}
      >
        <div className='top-bar_user-profile-container'>
          <div
            ref={this.box}
            className={`top-bar_user-profile ${showMenu ? 'active' : ''}`}
          >
            <div
              className='top-bar_user-profile_avatar'
              style={{
                backgroundImage:
                  "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
              }}
            ></div>
            <div className='top-bar_user-profile-arrow'></div>
          </div>
          <TopBarUserMenu
            username={currentUser.username}
            firstName={currentUser.firstName}
            lastName={currentUser.lastName}
            showMenu={showMenu}
            setState={(state) => this.setState({ showMenu: state })}
            userId={currentUser.userId}
          />
        </div>
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
