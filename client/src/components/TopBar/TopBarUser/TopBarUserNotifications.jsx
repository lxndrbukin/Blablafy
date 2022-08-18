import React from 'react';
import { connect } from 'react-redux';
import {
  removeFriendRequest,
  removeSentRequest,
  addFriendToUser,
  addFriendToCurrentUser,
} from '../../../actions';

class TopBarUserNotifications extends React.Component {
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
    document.addEventListener('click', this.handleOutsideClick);
  };

  notifications = () => {
    const {
      currentUser,
      removeFriendRequest,
      removeSentRequest,
      addFriendToCurrentUser,
      addFriendToUser,
    } = this.props;
    if (currentUser.friendRequests && currentUser.friendRequests.length !== 0) {
      return currentUser.friendRequests.map((request, idx) => {
        return (
          <div key={idx} className='top-bar_notification'>
            <div className='notification_left'>
              <div
                className='notification_avatar'
                style={{
                  backgroundImage:
                    "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
                }}
              ></div>
            </div>
            <div className='notification_right'>
              <div className='notification_name'>{request.username}</div>
              <div className='notification_text'>
                Added you to their Friend List
              </div>
            </div>
            <button
              onClick={() => {
                removeFriendRequest(currentUser.userId, {
                  userId: request.userId,
                });
                removeSentRequest(request.userId, {
                  userId: currentUser.userId,
                });
                addFriendToCurrentUser(currentUser.userId, {
                  userId: request.userId,
                  username: request.username,
                });
                addFriendToUser(request.userId, {
                  userId: currentUser.userId,
                  username: currentUser.username,
                });
              }}
              className='accept'
            >
              Accept
            </button>
          </div>
        );
      });
    } else {
      return (
        <div className='top-bar_no-notifications'>No new notifications</div>
      );
    }
  };
  render() {
    const { currentUser } = this.props;
    const { showMenu } = this.state;
    return (
      <div className='top-bar_notifications' ref={this.box}>
        <div
          className={`top-bar_notifications-icon ${showMenu ? 'active' : ''}`}
          onClick={() => this.setState({ showMenu: !showMenu })}
        >
          <i className='fas fa-bell'></i>
          <div className='top-bar_notifications-number'>
            <span>
              {currentUser.friendRequests &&
              currentUser.friendRequests.length !== 0
                ? currentUser.friendRequests.length
                : ''}
            </span>
          </div>
        </div>
        <div
          style={showMenu ? { display: 'block' } : { display: 'none' }}
          className='top-bar_notifications-box'
        >
          {this.notifications()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {
  addFriendToCurrentUser,
  addFriendToUser,
  removeFriendRequest,
  removeSentRequest,
})(TopBarUserNotifications);
