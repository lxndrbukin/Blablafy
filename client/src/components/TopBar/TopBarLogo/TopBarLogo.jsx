import React from 'react';
import { NavLink } from 'react-router-dom';

const TopBarLogo = () => {
  return (
    <NavLink className='top-bar_logo' to='/'>
      <i className='fas fa-comment-alt'>
        <div className='logo_face'>
          <div className='face_eyes'>
            <div className='eye'></div>
            <div className='eye'></div>
          </div>
          <div className='face_smile'></div>
        </div>
      </i>
    </NavLink>
  );
};

export default TopBarLogo;
