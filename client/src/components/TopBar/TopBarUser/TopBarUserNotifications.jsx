import React from 'react';
import { connect } from 'react-redux';

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
    const { currentUser } = this.props;
    if (currentUser.friendRequests) {
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
          </div>
        );
      });
    }
  };
  render() {
    const { currentUser } = this.props;
    const { showMenu } = this.state;
    return (
      <div className='top-bar_notifications' ref={this.box}>
        <div
          className='top-bar_notifications-icon'
          onClick={() => this.setState({ showMenu: !showMenu })}
        >
          <i className='fas fa-bell'></i>
          <div className='top-bar_notifications-number'>
            <span>
              {currentUser.friendRequests
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

export default connect(mapStateToProps)(TopBarUserNotifications);
