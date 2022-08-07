import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

class NewAuth extends React.Component {
  render() {
    return (
      <form className='form'>
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

const newAuth = reduxForm({ form: 'existingAuth' })(NewAuth);

export default connect(null)(newAuth);
