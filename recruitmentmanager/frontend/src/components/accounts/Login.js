import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
  state = {
    username: '',
    password: '',
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />
    }

    const { username, password } = this.state;

    return (
      <div className="col-md-5 m-auto ">
        <div className="card card-body mt-5 p-3 shadow">
          <h2 className="login-header">Log In</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-4">
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="form-control"
                  name="username"
                  onChange={this.onChange}
                  value={username}
                  />
            </div>
            <div className="form-group m-4">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="form-control"
                  name="password"
                  onChange={this.onChange}
                  value={password}
                  />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>Don't have an account?</p>
            <Link to="/register">Sign Up Here</Link>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
