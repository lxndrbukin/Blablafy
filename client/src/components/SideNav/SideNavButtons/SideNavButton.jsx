import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavButton = ({ name, icon, url }) => {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? 'side-nav_button active-button' : 'side-nav_button'
      }
    >
      <i className={`fas ${icon}`}></i>
    </NavLink>
  );
};

export default SideNavButton;
