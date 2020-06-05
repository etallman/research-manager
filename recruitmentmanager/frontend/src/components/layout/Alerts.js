import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.message.first_name) alert.error(`Error in First Name Field: ${error.message.first_name.join()}`);
      if (error.message.last_name) alert.error(`Error in Last Name Field: ${error.message.last_name.join()}`);
      if (error.message.age) alert.error(`Error in Age Field: ${error.message.age.join()}`);
      if (error.message.email) alert.error(`Error in Email Field: ${error.message.email.join()}`);
      if (error.message.phone) alert.error(`Error in Phone Number Field: ${error.message.phone.join()}`);
      if (error.message.notes) alert.error(`Error in Notes Field: ${error.message.notes.join()}`);
      if (error.message.non_field_errors) alert.error(error.message.non_field_errors.join());
      if (error.message.username) alert.error(error.message.username.join());
    }
    if (message !== prevProps.message) {
      if (message.deleteRecruit) alert.success(message.deleteRecruit);
      if (message.addRecruit) alert.success(message.addRecruit);
      if (message.passwordNonMatch) alert.error(message.passwordNonMatch)
    }
  }

  render() {
    return <Fragment />
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));