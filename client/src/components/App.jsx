import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideNav from './SideNav/SideNav';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <SideNav />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
