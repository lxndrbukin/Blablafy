import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
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
            errorMessage='Please enter your First Name'
            component={Input}
            label='First Name'
            name='firstName'
            fieldName='firstName'
            onBlur={(e) => {
              e.target.value === ''
                ? this.setState({ [e.target.name]: true })
                : this.setState({ [e.target.name]: null });
            }}
            emptyFields={this.state ? this.state : null}
            transparent
          />
          <Field
            errorMessage='Please enter your Last Name'
            component={Input}
            label='Last Name'
            name='lastName'
            fieldName='lastName'
            onBlur={(e) => {
              e.target.value === ''
                ? this.setState({ [e.target.name]: true })
                : this.setState({ [e.target.name]: null });
            }}
            emptyFields={this.state ? this.state : null}
            transparent
          />
          <Field
            errorMessage='Please enter a valid Email Address'
            component={Input}
            label='Email'
            name='email'
            fieldName='email'
            onBlur={(e) => {
              e.target.value === ''
                ? this.setState({ [e.target.name]: true })
                : this.setState({ [e.target.name]: null });
            }}
            emptyFields={this.state ? this.state : null}
            transparent
          />
          <input value='Submit' className='form-button' type='submit' />
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
