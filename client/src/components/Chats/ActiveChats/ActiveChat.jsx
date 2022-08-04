import React from 'react';

const ActiveChat = ({ name }) => {
  return (
    <div className='chats_active-chat'>
      <div className='active-chat_left'>
        <div
          className='chats_user-avatar'
          style={{
            backgroundImage:
              "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
          }}
        ></div>
      </div>
      <div className='active-chat_right'>
        <div className='chats_user-nickname'>{name}</div>
        <div className='chats_user-message'></div>
      </div>
    </div>
  );
};

export default ActiveChat;
