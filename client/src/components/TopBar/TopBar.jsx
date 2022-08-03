import React from 'react';
import './TopBar.scss';
import TopBarSearch from './TopBarSearch/TopBarSearch';
import TopBarUser from './TopBarUser/TopBarUser';

class TopBar extends React.Component {
  render() {
    return (
      <div className='top-bar'>
        <TopBarSearch />
        <TopBarUser />
      </div>
    );
  }
}

export default TopBar;
