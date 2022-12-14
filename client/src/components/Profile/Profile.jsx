import React from 'react';
import './Profile.scss';
import { connect } from 'react-redux';
import {
  fetchUser,
  sendFriendRequest,
  receiveFriendRequest,
} from '../../actions';
import ProfileDetails from './ProfileDetails/ProfileDetails';

class Profile extends React.Component {
  componentDidMount() {
    const { match, fetchUser } = this.props;
    fetchUser(parseInt(match.params.id));
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

  showDetails() {
    const { currentUser, match, user } = this.props;
    if (currentUser && currentUser.userId === parseInt(match.params.id)) {
      return (
        <ProfileDetails
          username={currentUser ? currentUser.username : ''}
          firstName={currentUser ? currentUser.firstName : ''}
          lastName={currentUser ? currentUser.lastName : ''}
          email={currentUser ? currentUser.email : ''}
          friends={currentUser ? currentUser.friends : []}
          friendRequests={currentUser ? currentUser.friendRequests : []}
          sentRequests={currentUser ? currentUser.sentRequests : []}
          id={match.params.id}
        />
      );
    } else if (
      (currentUser && currentUser.userId !== parseInt(match.params.id)) ||
      currentUser === ''
    ) {
      return (
        <ProfileDetails
          username={user ? user.username : ''}
          firstName={user ? user.firstName : ''}
          lastName={user ? user.lastName : ''}
          email={user ? user.email : ''}
          friends={user ? user.friends : []}
          friendRequests={user ? user.friendRequests : []}
          sentRequests={user ? user.sentRequests : []}
          id={match.params.id}
        />
      );
    }
  }

  render() {
    return <div className='profile'>{this.showDetails()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    user: state.user,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  sendFriendRequest,
  receiveFriendRequest,
})(Profile);
