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
    const users = [
      {
        name: 'Alex',
        avatar:
          'https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png',
        message: 'Hi there',
        msgTime: '9:20',
        msgNum: 1,
      },
      {
        name: 'Serghey',
        avatar:
          'https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png',
        message: 'How are you?',
        msgTime: '16:46',
        msgNum: 3,
      },
      {
        name: 'Michael',
        avatar:
          'https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png',
        message: 'Hbu',
        msgTime: '01:53',
        msgNum: 4,
      },
    ];
    return users.map((user, idx) => {
      return (
        <SideChat
          key={idx}
          name={user.name}
          avatar={user.avatar}
          message={user.message}
          msgNum={user.msgNum}
          msgTime={user.msgTime}
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
  };
};

export default connect(mapStateToProps, {})(SideChats);
