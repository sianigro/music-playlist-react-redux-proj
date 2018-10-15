import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser, clearCurrentProfile } from '../../actions';

class Nav extends Component {
  onLogoutClick = e => {
    e.preventDefault();

    this.props.clearCurrentProfile();
    this.props.logoutUser();

    window.location.href = 'http://localhost:3000/login';
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const userLoggedIn = (
      <ul>
        <li>
          <Link to="/">{user.username}</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="" onClick={this.onLogoutClick}>
            Logout
          </a>
        </li>
      </ul>
    );

    const logInOrRegister = (
      <ul>
        <li>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    );

    return (
      <nav id="nav">{isAuthenticated ? userLoggedIn : logInOrRegister}</nav>
      // <nav id="nav">{isAuthenticated}</nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Nav);
