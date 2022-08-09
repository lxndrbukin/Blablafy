import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';
import ProfileDetails from './ProfileDetails/ProfileDetails';

class Profile extends React.Component {
  componentDidMount() {
    const { currentUser, match, fetchUsers } = this.props;
    if (currentUser.userId !== parseInt(match.params.id)) {
      fetchUsers();
    }
  }

  showDetails() {
    const { currentUser, match, user } = this.props;
    if (currentUser && currentUser.userId === parseInt(match.params.id)) {
      return (
        <ProfileDetails
          username={currentUser ? currentUser.username : 'Loading'}
        />
      );
    } else if (
      (currentUser && currentUser.userId !== parseInt(match.params.id)) ||
      currentUser === ''
    ) {
      return <ProfileDetails username={user ? user.username : 'Loading'} />;
    }
  }

  render() {
    return <div className='profile'>{this.showDetails()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.currentUser,
    user: state.users[ownProps.match.params.id - 1],
  };
};

export default connect(mapStateToProps, { fetchUsers })(Profile);
