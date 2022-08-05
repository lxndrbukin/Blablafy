import React from 'react';
import SideChat from './SideChat';
import Search from '../../assets/Search';

class SideChats extends React.Component {
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
    return (
      <div className='chats_section'>
        <Search className='chats_search' placeholder='Chats or messages' />
        {this.showChats()}
      </div>
    );
  }
}

export default SideChats;
