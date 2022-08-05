import React from 'react';
import './TopBar.scss';
import Search from '../assets/Search';
import TopBarUser from './TopBarUser/TopBarUser';

class TopBar extends React.Component {
  render() {
    return (
      <div className='top-bar'>
        <Search className='top-bar_search' placeholder='Find people here' />
        <TopBarUser />
      </div>
    );
  }
}

export default TopBar;
