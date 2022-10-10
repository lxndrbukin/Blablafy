import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { sendChatMessage } from '../../../actions';

class ActiveChat extends React.Component {
  messageInput({ input }) {
    return (
      <input
        placeholder='Write a message...'
        className='active-chat_input-text'
        type='text'
        {...input}
      ></input>
    );
  }

  onSubmit = (formValues) => {
    const { currentUser, user, sendChatMessage } = this.props;
    console.log(formValues);
    sendChatMessage(currentUser.userId, user.userId, formValues.message);
  };

  render() {
    const { user } = this.props;
    return (
      <div className='active-chat'>
        <div className='active-chat_user-info'>
          <div className='active-chat_user-info_left'>
            <div className='active-chat_username'>{user.firstName}</div>
            <div className='active-chat_user-status'></div>
          </div>
          <div className='active-chat_user-info_right'></div>
        </div>
        <div className='active-chat_messages-wrapper'>
          <div className='active-chat_messages'>
            <div>Messages</div>
          </div>
        </div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='active-chat_input'
        >
          <Field component={this.messageInput} name='message' />
          <button type='submit' className='active-chat_input-button'>
            <i className='fab fa-telegram-plane'></i>
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    user: state.user,
  };
};

const activeChat = reduxForm({
  form: 'sendMessage',
  enableReinitialize: true,
})(ActiveChat);

export default connect(mapStateToProps, { sendChatMessage })(activeChat);
