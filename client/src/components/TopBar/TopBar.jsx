import React from 'react';
import './TopBar.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchForUsers, fetchUser } from '../../actions';
import TopBarLogo from './TopBarLogo/TopBarLogo';
import TopBarUser from './TopBarUser/TopBarUser';
import TopBarUserNotifications from './TopBarUser/TopBarUserNotifications';

class TopBar extends React.Component {
  state = {
    searchWindow: false,
    searchRequest: '',
  };

  search() {
    console.log(this.state.searchRequest);
    this.props.searchForUsers(this.state.searchRequest);
  }

  changeState(e) {
    this.setState({ searchRequest: e.target.value }, this.search);
    this.setState(
      e.target.value.length > 0
        ? { searchWindow: true }
        : { searchWindow: false }
    );
  }

  searchResult() {
    const { searchRequest } = this.state;
    const { users } = this.props;
    if (searchRequest !== '' && users.length !== 0) {
      return this.props.users.map((user, idx) => {
        return (
          <NavLink
            onClick={() => this.props.fetchUser(user.userId)}
            className='top-bar_search-result'
            key={idx}
            to={`/profile/${user.userId}`}
          >
            <div
              className='top-bar_search-result_avatar'
              style={{
                backgroundImage:
                  "url('https://www.savoric.com/wp-content/uploads/2018/03/profil-pic_dummy.png')",
              }}
            ></div>
            <div className='top-bar_search-result_username'>
              {user.firstName} {user.lastName}
            </div>
          </NavLink>
        );
      });
    } else {
      return 'Loading';
    }
  }

  showResult() {
    const { users } = this.props;
    if (users.length !== 0 && users.length === 0) {
      return 'No results';
    } else {
      return this.searchResult();
    }
  }

  render() {
    const { searchRequest } = this.state;
    return (
      <div className='top-bar_wrapper'>
        <div className='top-bar'>
          <TopBarLogo />
          <div className='top-bar_search'>
            <div className='top-bar_search-input-wrapper'>
              <input
                onClick={(e) => {
                  if (e.target.value !== '') {
                    this.changeState(e);
                  }
                }}
                onChange={(e) => {
                  this.changeState(e);
                }}
                onInpu
                type='text'
                placeholder='Find people here'
              />
              <i className='fas fa-search'></i>
            </div>
            <div
              className='top-bar_search-box'
              style={
                this.state.searchWindow
                  ? { display: 'block' }
                  : { display: 'none' }
              }
              onMouseLeave={() => {
                this.setState({ searchWindow: false });
              }}
              onFocus={() => {
                this.setState({ searchRequest: searchRequest });
              }}
            >
              {this.showResult()}
            </div>
          </div>
          <TopBarUserNotifications />
          <TopBarUser />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { searchForUsers, fetchUser })(TopBar);
