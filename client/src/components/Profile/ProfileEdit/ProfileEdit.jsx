import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, autofill } from 'redux-form';
import { Input } from '../../assets/Inputs';

class ProfileEdit extends React.Component {
  render() {
    return (
      <div
        className='profile-info_box'
        style={{ margin: '10px auto auto auto' }}
      >
        <div className='profile-info_box-header'>
          <div className='profile-info_box-header-name'>Edit Profile</div>
        </div>
        <form className='form' style={{ width: 'fit-content', margin: 'auto' }}>
          <Field
            component={Input}
            label='First Name'
            name='firstName'
            transparent
          />
          <Field
            component={Input}
            label='Last Name'
            name='lastName'
            transparent
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    initialValues: {
      userId: state.currentUser ? state.currentUser.userId : '',
    },
  };
};

const profileEdit = reduxForm({
  form: 'editProfile',
  enableReinitialize: true,
})(ProfileEdit);

export default connect(mapStateToProps)(profileEdit);
