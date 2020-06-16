import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Header extends Component {

  static propTypes =  {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}`: ''}</strong>
        </span>
        <li className="nav-item">
          <button 
          onClick={this.props.logout}
          className="nav-link btn btn-info btn-sm text-light">
            Logout
            </button>
        </li>
      </ul>
    )
    const guestLinks = (
      <ul className="nav nav-tabs mr-auto">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
            </Link>
        </li>
      </ul>
    )

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <div className="container">
          <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon" />
          </button>
        <div>
          <a className="navbar-brand" href="#">Research Manager</a>
        </div>
          {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header);