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
        <div className='active-chat_messages-wrapper'>
          <div className='active-chat_messages'>
            <div>Messages</div>
          </div>
        </div>
        <form className='active-chat_input'>
          <textarea
            placeholder='Write a message...'
            className='active-chat_input-text'
            type='text'
          ></textarea>
          <button className='active-chat_input-button'>
            <i className='fab fa-telegram-plane'></i>
          </button>
        </form>
      </div>
    );
  }
}

export default ActiveChat;
