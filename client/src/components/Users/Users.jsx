import React from 'react';
import './Users.scss';
import { connect } from 'react-redux';
import { fetchUsers, deleteUser } from '../../actions';
import User from './User/User';

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const { users } = this.props;
    if (users) {
      return users.map((user, idx) => {
        return (
          <User
            key={idx}
            username={user.username}
            userId={user.userId}
            chats={user.chats}
            friendRequests={user.friendRequests}
            sentRequests={user.sentRequests}
            friends={user.friends}
            deleteUser={this.props.deleteUser}
          />
        );
      });
    }
  }

  render() {
    return <div className='users'>{this.renderUsers()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUser })(Users);
