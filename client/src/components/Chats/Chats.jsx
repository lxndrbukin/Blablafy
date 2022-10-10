import React from 'react';
import './Chats.scss';
import { connect } from 'react-redux';
import SideChats from './SideChats/SideChats';
import ActiveChat from './ActiveChat/ActiveChat';
import { fetchUser, fetchChats } from '../../actions';

class Chats extends React.Component {
  state = {
    chatWithUser: false,
  };

  componentDidMount() {
    const { userId } = this.props.currentUser;
    this.props.fetchChats(userId);
  }

  selectUserToChat = (userId) => {
    this.props.fetchUser(userId);
    console.log(this.props.user);
  };

  render() {
    const { selectUserToChat } = this;
    const { user } = this.props;
    return (
      <div className='chats'>
        <SideChats selectUserToChat={selectUserToChat} />
        <ActiveChat user={user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { fetchUser, fetchChats })(Chats);
