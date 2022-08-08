import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import TopBar from './TopBar/TopBar';
import SideNav from './SideNav/SideNav';
import Homepage from './Homepage/Homepage';
import Chats from './Chats/Chats';
import AuthPage from './Auth/AuthPage';
import Profile from './Profile/Profile';

class App extends React.Component {
  renderAuthPage() {
    const { currentUser } = this.props;
    if (currentUser && currentUser !== 'Logged Out') {
      return <Navigate to='/' />;
    } else {
      return <AuthPage />;
    }
  }

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
                <Route path='/chats' element={<Chats />} />
                <Route path='/auth' element={this.renderAuthPage()} />
                <Route path='/profile/:id' element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(App);
