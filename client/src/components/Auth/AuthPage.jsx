import React from 'react';
import './Auth.scss';
import NewAuth from './NewAuth/NewAuth';
import ExistingAuth from './ExistingAuth/ExistingAuth';

const AuthPage = () => {
  return (
    <div className='auth-forms'>
      <div className='auth-section'>
        <div className='auth-section_header'>Sign Up</div>
        <NewAuth />
      </div>
      <div className='auth-section-separator'>
        <div className='auth-section-separator_icon-wrapper'>
          <div className='auth-section-separator_icon'>
            <i className='fas fa-user'></i>
          </div>
        </div>
      </div>
      <div className='auth-section'>
        <div className='auth-section_header'>Log In</div>
        <ExistingAuth />
      </div>
    </div>
  );
};

export default AuthPage;
