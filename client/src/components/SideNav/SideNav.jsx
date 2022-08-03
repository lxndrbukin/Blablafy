import React from 'react';
import './SideNav.scss';
import SideNavLogo from './SideNavLogo/SideNavLogo';
import SideNavButtons from './SideNavButtons/SideNavButtons';

class SideNav extends React.Component {
  render() {
    return (
      <div className='side-nav'>
        <SideNavLogo />
        <SideNavButtons />
      </div>
    );
  }
}

export default SideNav;
