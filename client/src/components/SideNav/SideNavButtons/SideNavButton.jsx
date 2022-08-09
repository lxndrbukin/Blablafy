import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNavButton = ({ name, icon, url, currentUser }) => {
  return (
    <NavLink
      to={
        url === '/profile' && currentUser && currentUser !== ''
          ? `/profile/${currentUser.userId}`
          : url
      }
      exact
      className='side-nav_button'
      activeClassName='active-button'
      title={name}
    >
      <i className={`fas ${icon}`}></i>
    </NavLink>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(SideNavButton);
