import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

export const Button = ({ className, text, pathname }) => {
  return (
    <NavLink to={pathname} className={className}>
      <span>{text}</span>
    </NavLink>
  );
};
