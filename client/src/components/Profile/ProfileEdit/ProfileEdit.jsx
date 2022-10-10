import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Input, Select } from '../../assets/Inputs';

class ProfileEdit extends React.Component {
  state = {
    fields: [
      {
        label: 'First Name',
        name: 'firstName',
      },
      {
        label: 'Last Name',
        name: 'lastName',
      },
      {
        label: 'Email Address',
        name: 'email',
      },
    ],
  };

  renderFields() {
    const { fields } = this.state;

    return fields.map((field, idx) => {
      return (
        <Field
          key={idx}
          errorMessage={`Please enter your ${field.label}`}
          component={Input}
          label={field.label}
          name={field.name}
          fieldName={field.name}
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
          transparent
        />
      );
    });
  }

  render() {
    return (
      <div
        className='profile-info_box'
        style={{ margin: '10px auto auto auto', width: '100%' }}
      >
        <div className='profile-info_box-header'>
          <div className='profile-info_box-header-name'>Edit Profile</div>
        </div>
        <form className='form' style={{ width: 'fit-content', margin: 'auto' }}>
          {this.renderFields()}
          <div className='date-of-birth'>
            <Field
              errorMessage={`Please enter your`}
              component={Select}
              name='birthDay'
              fieldName='birthDay'
              options={['1', '2', '3']}
              onBlur={(e) => {
                e.target.value === ''
                  ? this.setState({ [e.target.name]: true })
                  : this.setState({ [e.target.name]: null });
              }}
              emptyFields={this.state ? this.state : null}
              transparent
            />
            <Field
              errorMessage={`Please enter your`}
              component={Select}
              name='birthMonth'
              fieldName='birthMonth'
              options={['1', '2', '3']}
              onBlur={(e) => {
                e.target.value === ''
                  ? this.setState({ [e.target.name]: true })
                  : this.setState({ [e.target.name]: null });
              }}
              emptyFields={this.state ? this.state : null}
              transparent
            />
          </div>
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
      firstName: state.currentUser ? state.currentUser.firstName : '',
      lastName: state.currentUser ? state.currentUser.lastName : '',
      email: state.currentUser ? state.currentUser.email : '',
      birthday: '03/02/1996',
    },
  };
};

const profileEdit = reduxForm({
  form: 'editProfile',
  enableReinitialize: true,
})(ProfileEdit);

export default connect(mapStateToProps)(profileEdit);
