import React from 'react';
import './Homepage.scss';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage'>
        <i className='fas fa-comments'></i>
        <p className='homepage-text'>Welcome to Blablafy!</p>
      </div>
    );
  }
}

export default Homepage;
