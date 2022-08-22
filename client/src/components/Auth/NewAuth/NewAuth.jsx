import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../../../actions';

class NewAuth extends React.Component {
  onSubmit = (formValues) => {
    this.props.createUser(formValues);
  };

  changeState = (stateName) => {
    this.setState({ [stateName]: true });
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          state={this.state}
          changeState={this.changeState}
          errorMessage='Please enter a valid Username. Example: Nickname123'
          component={Input}
          type='text'
          label='Username'
          name='username'
        />
        <Field
          state={this.state}
          changeState={this.changeState}
          errorMessage='Please enter a valid Password.'
          component={Input}
          type='password'
          label='Password'
          name='password'
        />
        <Field
          state={this.state}
          changeState={this.changeState}
          errorMessage='Please enter your First Name.'
          component={Input}
          type='text'
          label='First Name'
          name='firstName'
        />
        <Field
          state={this.state}
          changeState={this.changeState}
          errorMessage='Please enter your Last Name.'
          component={Input}
          type='text'
          label='Last Name'
          name='lastName'
        />
        <Field
          state={this.state}
          changeState={this.changeState}
          errorMessage='Please enter your Email Address.'
          component={Input}
          type='text'
          label='Email'
          name='email'
        />
        <input value='Join' className='form-button' type='submit' />
      </form>
    );
  }
}

const newAuth = reduxForm({ form: 'newAuth' })(NewAuth);

export default connect(null, { createUser })(newAuth);
