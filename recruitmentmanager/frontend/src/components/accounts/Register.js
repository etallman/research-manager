import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createAlert } from '../../actions/alerts';


export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirm: ''
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, email, password, password_confirm } = this.state;
    if (password !== password_confirm) {
      this.props.createAlert({ passwordNonMatch: 'Passwords do not match'});
    } else {
      const newUser = {
        username,
        email,
        password
      };
      this.props.register(newUser);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    const { username, email, password, password_confirm } = this.state;

    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5 z-depth-2">
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  />
            </div>
            <div className="form-group">
              <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                  />
            </div>
            <div className="form-group">
              <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password_confirm"
                  onChange={this.onChange}
                  value={password_confirm}
                  />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createAlert })(Register);