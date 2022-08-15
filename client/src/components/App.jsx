import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopBar from './TopBar/TopBar';
import SideNav from './SideNav/SideNav';
import Homepage from './Homepage/Homepage';
import Chats from './Chats/Chats';
import AuthPage from './Auth/AuthPage';
import Profile from './Profile/Profile';
import Users from './Users/Users';

class App extends React.Component {
  renderAuthPage() {
    const { currentUser } = this.props;
    if (currentUser && currentUser !== 'Logged Out') {
      return <Redirect to='/' />;
    } else {
      return <AuthPage />;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className='app-wrapper dark'>
          <TopBar />
          <div className='components-wrapper'>
            <SideNav />
            <div className='container'>
              <Switch>
                <Route path='/' exact component={Homepage} />
                <Route path='/chats' exact component={Chats} />
                <Route path='/auth' exact component={AuthPage} />
                <Route path='/users' exact component={Users} />
                <Route path='/profile/:id' exact component={Profile} />
              </Switch>
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
