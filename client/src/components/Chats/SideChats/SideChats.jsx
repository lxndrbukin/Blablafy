import React from 'react';
import { connect } from 'react-redux';
import SideChat from './SideChat';
import Search from '../../assets/Search';
import FriendForChat from './FriendForChat';

class SideChats extends React.Component {
  state = {
    newChat: false,
  };

  newChat() {
    const { newChat } = this.state;
    this.setState({ newChat: !newChat });
  }

  showFriendsForChat() {
    const { friends } = this.props.currentUser;
    return friends.map((friend) => {
      const { firstName, lastName, userId } = friend;
      return (
        <FriendForChat
          key={userId}
          firstName={firstName}
          lastName={lastName}
          userId={userId}
          selectUserToChat={this.props.selectUserToChat}
        />
      );
    });
  }

  showChats() {
    const { chats } = this.props;
    return chats.map((chat, idx) => {
      const { user } = chat;
      return (
        <SideChat
          key={idx}
          userId={user.userId}
          name={`${user.firstName} ${user.lastName}`}
          selectUserToChat={this.props.selectUserToChat}
          // avatar={user.avatar}
          // message={user.message}
          // msgNum={user.msgNum}
          // msgTime={user.msgTime}
        />
      );
    });
  }

  render() {
    const { newChat } = this.state;
    return (
      <div className='chats_section'>
        <i
          onClick={() => this.newChat()}
          style={newChat ? { display: 'none' } : { display: 'block' }}
          className='fas fa-edit'
        ></i>
        <i
          onClick={() => this.newChat()}
          style={!newChat ? { display: 'none' } : { display: 'block' }}
          className='fas fa-times'
        ></i>
        <Search className='chats_search' placeholder='Chats or messages' />
        {!newChat ? this.showChats() : this.showFriendsForChat()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    chats: state.chats,
  };
};

export default connect(mapStateToProps, {})(SideChats);
