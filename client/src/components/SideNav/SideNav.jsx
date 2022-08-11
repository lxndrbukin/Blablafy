import React from 'react';
import './SideNav.scss';
import SideNavButtons from './SideNavButtons/SideNavButtons';
import SideNavStyleButton from './SideNavButtons/SideNavStyleButton';

class SideNav extends React.Component {
  render() {
    return (
      <div className='side-nav'>
        <SideNavButtons />
      </div>
    );
  }
}

export default SideNav;
