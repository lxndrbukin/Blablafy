import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNavButton = ({ name, icon, url, currentUser }) => {
  return (
    <NavLink
      to={
        url === '/profile' && currentUser ? `/profile/${currentUser._id}` : url
      }
      className={({ isActive }) =>
        isActive ? 'side-nav_button active-button' : 'side-nav_button'
      }
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
