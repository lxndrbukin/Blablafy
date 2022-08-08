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
    if (this.state.searchRequest !== '') {
      return this.props.users
        .filter((user) => user.username.includes(this.state.searchRequest))
        .map((user, idx) => {
          return (
            <NavLink
              className='top-bar_search-result'
              key={idx}
              to={`/profile/${user._id}`}
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
    }
  }

  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar_search'>
          <input
            onClick={(e) => {
              this.changeState(e);
              this.search();
            }}
            onChange={(e) => {
              this.changeState(e);
            }}
            type='text'
            placeholder='Find people here'
          />
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
            {this.searchResult()}
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
