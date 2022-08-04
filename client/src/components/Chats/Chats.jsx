import React from 'react';
import ActiveChats from './ActiveChats/ActiveChats';

class Chats extends React.Component {
  render() {
    return (
      <div className='chats'>
        <ActiveChats />
      </div>
    );
  }
}

export default Chats;
