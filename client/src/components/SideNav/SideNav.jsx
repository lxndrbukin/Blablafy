import React from 'react';
import './SideNav.scss';
import SideNavLogo from './SideNavLogo/SideNavLogo';
import SideNavButtons from './SideNavButtons/SideNavButtons';
import SideNavStyleButton from './SideNavButtons/SideNavStyleButton';

class SideNav extends React.Component {
  render() {
    return (
      <div className='side-nav'>
        <SideNavLogo />
        <SideNavButtons />
        <SideNavStyleButton />
      </div>
    );
  }
}

export default SideNav;
