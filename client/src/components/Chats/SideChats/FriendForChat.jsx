import React from 'react';
import { connect } from 'react-redux';
import { createChatWithUser } from '../../../actions';

const FriendForChat = ({
  firstName,
  lastName,
  userId,
  selectUserToChat,
  createChatWithUser,
  currentUser,
}) => {
  return (
    <div
      onClick={() => {
        selectUserToChat(userId);
        createChatWithUser(
          {
            userId: currentUser.userId,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
          },
          { userId, firstName, lastName }
        );
      }}
      className='chat'
    >
      <div className='chat_left'>
        <div
          className='chat_user-avatar'
          style={{
            backgroundImage: `url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')`,
          }}
        ></div>
      </div>
      <div className='chat_middle'>
        <div className='chat_user-nickname'>
          {firstName} {lastName}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { createChatWithUser })(FriendForChat);
