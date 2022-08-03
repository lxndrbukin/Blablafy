import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import SideNav from './SideNav/SideNav';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <SideNav />
          <div className='container'>
            <TopBar />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
