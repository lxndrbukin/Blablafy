import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './TopBar/TopBar';
import SideNav from './SideNav/SideNav';
import Homepage from './Homepage/Homepage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper dark'>
          <SideNav />
          <div className='container'>
            <TopBar />
            <div className='components-wrapper'>
              <Routes>
                <Route path='/' element={<Homepage />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
