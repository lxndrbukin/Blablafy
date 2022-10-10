import React from 'react';

const SideChat = ({
  name,
  userId,
  message,
  avatar,
  msgTime,
  msgNum,
  selectUserToChat,
}) => {
  return (
    <div onClick={() => selectUserToChat(userId)} className='chat'>
      <div className='chat_left'>
        <div
          className='chat_user-avatar'
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        ></div>
      </div>
      <div className='chat_middle'>
        <div className='chat_user-nickname'>{name}</div>
        <div className='chat_user-message'>{message}</div>
      </div>
      <div className='chat_right'>
        <div className='chat_user-message_time'>{msgTime}</div>
        <div className='chat_user-message_num'>
          <span>{msgNum}</span>
        </div>
      </div>
    </div>
  );
};

export default SideChat;
