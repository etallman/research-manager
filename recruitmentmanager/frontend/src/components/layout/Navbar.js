import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

export class Navbar extends Component {

  static propTypes =  {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav mr-auto">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username.toUpperCase()}`: ''}</strong>
        </span>
        <li className="nav-item">
          <Link to="/recruits" className="nav-link">
            Recruitment List
            </Link>
        </li>
        <li className="nav-item">
          <Link to="/recruits/form" className="nav-link">
            Add Potential Participant
            </Link>
        </li>
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
      <ul className="navbar-nav mr-auto p-2">
        <li className="nav-item active">
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

      <nav className="navbar-nav navbar-expand-lg">  
        <a className="navbar-brand" href="/">Clinical Research Manager</a>
        <div className="container justify-content-end">          
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

          {isAuthenticated ? authLinks : guestLinks}
      </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar);