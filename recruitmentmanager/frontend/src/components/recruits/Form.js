import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRecruit } from '../../actions/recruits';
import PhoneInput from 'react-phone-number-input/input';

export class Form extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    age: '',
    referral_source: '',
    reason_interested: '',
    notes: ''
  }

  static propTypes = {
    addRecruit: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})
  
  onSubmit = e => {
    e.preventDefault
    
    const {first_name, last_name, email, phone_number, age, referral_source, reason_interested, notes } = this.state;
    const recruit = { first_name, last_name, email, phone_number, age, referral_source, reason_interested, notes };
    this.props.addRecruit(recruit)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      age: '',
      referral_source: '',
      reason_interested: '',
      notes: ''
    });
  };

  render() {
    const { first_name, last_name, email, phone_number, age, referral_source, reason_interested, notes } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Study Recruit Contact and Demographic Information</h2>
        <form onSubmit = {this.onSubmit}>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              className="form-control"
              type="text"
              name="first_name"
              onChange={this.onChange}
              value={first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              className="form-control"
              type="text"
              name="last_name"
              onChange={this.onChange}
              value={last_name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              placeholder="Age at the time of screen"
              className="form-control"
              type="text"
              name="age"
              onChange={this.onChange}
              value={age}
            />
          </div>
          <div className="form-group">
            <label>Referral Source</label>
            <input
              placeholder="Where/from whom did the study recruit hear about us?"
              className="form-control"
              type="text"
              name="referral_source"
              onChange={this.onChange}
              value={referral_source}
            />
          </div>
          <div className="form-group">
            <label>Reason Interested</label>
            <textarea
              placeholder = "Reason the study recruit is interested in participating"
              className = "form-control"
              type = "text"
              name = "reason_interested"
              onChange={this.onChange}
              value={reason_interested}
            />
          </div>
          <div className="form-group">
          <label>Notes</label>
            <textarea
            placeholder = "Additional Notes"
            className="form-control"
            type="text"
            name="notes"
            onChange={this.onChange}
            value={notes}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addRecruit })(Form);


          {/* <div className="form-group">
            <label>Phone Number</label>
            <input
            className="form-control"
            type="text"
            name="phone"
            onChange={this.onChange}
            value={phone}
            /> */}
          {/* <div className="form-group">
              <PhoneInput
              placeholder="Phone Number"
              value={phone_number}
              onChange={this.onChange}
              country="US"
              />
          </div> */}