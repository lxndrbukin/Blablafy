import React from 'react';
import './TopBar.scss';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';
import TopBarUser from './TopBarUser/TopBarUser';

class TopBar extends React.Component {
  state = {
    searchWindow: false,
    searchRequest: '',
  };

  search() {
    this.props.fetchUsers();
  }

  changeState(e) {
    this.setState({ searchRequest: e.target.value });
    this.setState(
      e.target.value.length > 0
        ? { searchWindow: true }
        : { searchWindow: false }
    );
  }

  searchResult() {
    if (this.state.searchRequest !== '' && this.props.users.length !== 0) {
      return this.props.users
        .filter((user) => user.username.includes(this.state.searchRequest))
        .map((user, idx) => {
          return (
            <NavLink
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
                {user.username}
              </div>
            </NavLink>
          );
        });
    } else {
      return 'Loading';
    }
  }

  showResult() {
    if (
      this.props.users.length !== 0 &&
      this.props.users.filter((user) =>
        user.username.includes(this.state.searchRequest)
      ).length === 0
    ) {
      return 'No results';
    } else {
      return this.searchResult();
    }
  }

  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar_search'>
          <div className='top-bar_search-input-wrapper'>
            <input
              onClick={(e) => {
                this.changeState(e);
              }}
              onChange={(e) => {
                this.changeState(e);
                setTimeout(this.props.fetchUsers, 1500);
              }}
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
              this.setState({ searchRequest: this.state.searchRequest });
            }}
          >
            {this.showResult()}
          </div>
        </div>
        <TopBarUser />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers })(TopBar);
