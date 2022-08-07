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
        <Field component={Input} type='text' label='Username' name='username' />
        <Field
          component={Input}
          type='password'
          label='Password'
          name='password'
        />
        <input value='Join' className='form-button' type='submit' />
      </form>
    );
  }
}

const newAuth = reduxForm({ form: 'newAuth' })(NewAuth);

export default connect(null, { createUser })(newAuth);
