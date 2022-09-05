import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../../../actions';

class NewAuth extends React.Component {
  onSubmit = (formValues) => {
    this.props.createUser(formValues);
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          errorMessage='Please enter a valid Username. Example: Nickname123'
          component={Input}
          type='text'
          label='Username'
          name='username'
          fieldName='username'
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
        />
        <Field
          errorMessage='Please enter your First Name.'
          component={Input}
          type='text'
          label='First Name'
          name='firstName'
          fieldName='firstName'
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
        />
        <Field
          errorMessage='Please enter your Last Name.'
          component={Input}
          type='text'
          label='Last Name'
          name='lastName'
          fieldName='lastName'
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
        />
        <Field
          errorMessage='Please enter your Email Address.'
          component={Input}
          type='text'
          label='Email'
          name='email'
          fieldName='email'
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
        />
        <Field
          errorMessage='Please enter a valid Password.'
          component={Input}
          type='password'
          label='Password'
          name='password'
          fieldName='password'
          onBlur={(e) => {
            e.target.value === ''
              ? this.setState({ [e.target.name]: true })
              : this.setState({ [e.target.name]: null });
          }}
          emptyFields={this.state ? this.state : null}
        />
        <input value='Join' className='form-button' type='submit' />
      </form>
    );
  }
}

const newAuth = reduxForm({ form: 'newAuth' })(NewAuth);

export default connect(null, { createUser })(newAuth);
