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
    this.setState({ chatWithUser: true });
  };

  render() {
    const { selectUserToChat } = this;
    const { chatWithUser } = this.state;
    const { user } = this.props;
    return (
      <div className='chats'>
        <SideChats selectUserToChat={selectUserToChat} />
        {chatWithUser ? <ActiveChat user={user} /> : null}
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
