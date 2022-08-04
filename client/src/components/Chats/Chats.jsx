import React from 'react';
import './Chats.scss';
import SideChats from './SideChats/SideChats';
import ActiveChat from './ActiveChat/ActiveChat';

class Chats extends React.Component {
  render() {
    return (
      <div className='chats'>
        <SideChats />
        <ActiveChat />
      </div>
    );
  }
}

export default Chats;
