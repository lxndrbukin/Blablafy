import React from 'react';
import { Input } from '../../assets/Inputs';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { loginUser } from '../../../actions';

class ExistingAuth extends React.Component {
  state = {
    errorUsernameStatus: false,
    errorPasswordStatus: false,
  };

  onSubmit = (formValues) => {
    try {
      if (!formValues.username) {
        this.setState({ errorUsernameStatus: true });
        throw Error('Invalid Username');
      } else if (!formValues.password) {
        this.setState({ errorPasswordStatus: true });
        throw Error('Invalid Password');
      } else {
        this.setState({ errorUsernameStatus: false });
        this.setState({ errorPasswordStatus: false });
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
          onBlur={(e) =>
            e.target.value === ''
              ? this.setState({ errorUsernameStatus: true })
              : this.setState({ errorUsernameStatus: false })
          }
          errorUsernameStatus={this.state.errorUsernameStatus}
          errorMessage='Please enter a valid Username'
          component={Input}
          type='text'
          label='Username'
          name='username'
        />
        <Field
          onBlur={(e) =>
            e.target.value === ''
              ? this.setState({ errorPasswordStatus: true })
              : this.setState({ errorPasswordStatus: false })
          }
          errorPasswordStatus={this.state.errorPasswordStatus}
          errorMessage='Please enter a valid Password'
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
