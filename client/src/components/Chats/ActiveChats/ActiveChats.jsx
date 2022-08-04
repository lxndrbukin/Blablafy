import React from 'react';
import ActiveChat from './ActiveChat';

class ActiveChats extends React.Component {
  showChats() {
    const users = [{ name: 'Alex' }, { name: 'Serghey' }, { name: 'Michael' }];
    return users.map((user, idx) => {
      return <ActiveChat key={idx} name={user.name} />;
    });
  }

  render() {
    return <div className='chats_active-section'>{this.showChats()}</div>;
  }
}

export default ActiveChats;
