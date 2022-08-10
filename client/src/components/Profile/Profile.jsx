import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import {
  fetchUsers,
  sendFriendRequest,
  receiveFriendRequest,
} from '../../actions';
import ProfileDetails from './ProfileDetails/ProfileDetails';

class Profile extends React.Component {
  componentDidMount() {
    const { currentUser, match, fetchUsers } = this.props;
    if (currentUser.userId !== parseInt(match.params.id)) {
      fetchUsers();
    }
  }

  friendRequest() {
    const { currentUser, user } = this.props;
    this.props.sendFriendRequest(currentUser._id, {
      userId: user.userId,
      username: user.username,
    });
    this.props.receiveFriendRequest(user.userId, {
      userId: currentUser.userId,
      username: currentUser.username,
    });
  }

  buttons() {
    const { currentUser, match } = this.props;
    if (
      (currentUser && currentUser.userId !== parseInt(match.params.id)) ||
      currentUser === ''
    ) {
      return (
        <button onClick={() => this.friendRequest()}>Add to Friends</button>
      );
    }
    return;
  }

  showDetails() {
    const { currentUser, match, user } = this.props;
    if (currentUser && currentUser.userId === parseInt(match.params.id)) {
      return (
        <ProfileDetails
          username={currentUser ? currentUser.username : []}
          friends={currentUser ? currentUser.friends : []}
          friendRequests={currentUser ? currentUser.friendRequests : []}
          sentRequests={currentUser ? currentUser.sentRequests : []}
          pageId={match.params.id}
        />
      );
    } else if (
      (currentUser && currentUser.userId !== parseInt(match.params.id)) ||
      currentUser === ''
    ) {
      return (
        <ProfileDetails
          username={user ? user.username : []}
          friends={user ? user.friends : []}
          friendRequests={user ? user.friendRequests : []}
          sentRequests={user ? user.sentRequests : []}
          pageId={match.params.id}
        />
      );
    }
  }

  render() {
    return (
      <div className='profile'>
        {this.showDetails()}
        {this.buttons()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    user: state.users[ownProps.match.params.id - 1],
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
  sendFriendRequest,
  receiveFriendRequest,
})(Profile);
