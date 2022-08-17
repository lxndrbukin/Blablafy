import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { loginUser } from '../../../actions';

class ExistingAuth extends React.Component {
  state = {
    errorStatus: false,
  };

  onSubmit = (e, formValues) => {
    this.props.loginUser(formValues);
  };

  render() {
    return (
      <form className='form' onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          onBlur={(e) =>
            e.target.value === ''
              ? this.setState({ errorStatus: true })
              : this.setState({ errorStatus: false })
          }
          errorStatus={this.state.errorStatus}
          errorMessage='Please enter a valid Username'
          component={Input}
          type='text'
          label='Username'
          name='username'
        />
        <Field
          component={Input}
          type='password'
          label='Password'
          name='password'
        />
        <input value='Sign In' className='form-button' type='submit' />
      </form>
    );
  }
}

const existingAuth = reduxForm({ form: 'existingAuth' })(ExistingAuth);

export default connect(null, { loginUser })(existingAuth);
