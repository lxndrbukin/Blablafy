import React from 'react';

class ActiveChat extends React.Component {
  render() {
    return (
      <div className='active-chat'>
        <div className='active-chat_user-info'>
          <div className='active-chat_user-info_left'>
            <div className='active-chat_username'>Alex</div>
            <div className='active-chat_user-status'>Online</div>
          </div>
          <div className='active-chat_user-info_right'></div>
        </div>
        <div className='active-chat_messages'>Message</div>
      </div>
    );
  }
}

export default ActiveChat;
