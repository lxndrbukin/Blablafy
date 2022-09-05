import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { loginUser } from '../../../actions';

class ExistingAuth extends React.Component {
  onSubmit = (formValues) => {
    try {
      if (!formValues.username || !formValues.password) {
        throw Error('Invalid Entry');
      } else {
        this.props.loginUser(formValues);
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          errorMessage='Please enter a valid Username'
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
          errorMessage='Please enter a valid Password'
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
          emptyFields={this.state}
        />
        <input value='Sign In' className='form-button' type='submit' />
      </form>
    );
  }
}

const existingAuth = reduxForm({ form: 'existingAuth' })(ExistingAuth);

export default connect(null, { loginUser })(existingAuth);
