import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addRecruit } from "../../actions/recruits";
import ReactPhoneInput from "react-phone-input-2";

export class Form extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    age: "",
    referral_source: "",
    reason_interested: "",
    notes: "",
  };

  static propTypes = {
    addRecruit: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  
  phoneOnChange = (value) => this.setState({ phone_number: value });
  
  onSubmit = (e) => {
    e.preventDefault;

    const {
      first_name,
      last_name,
      email,
      phone_number,
      age,
      referral_source,
      reason_interested,
      notes,
      first_contact_date,
      first_contact_time,
    } = this.state;

    const recruit = {
      first_name,
      last_name,
      email,
      phone_number,
      age,
      referral_source,
      reason_interested,
      notes,
      first_contact_date,
      first_contact_time,
    };

    this.props.addRecruit(recruit);

    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      age: "",
      referral_source: "",
      reason_interested: "",
      notes: "",
      first_contact_date: null,
      first_contact_time: null,
    });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      phone_number,
      age,
      referral_source,
      reason_interested,
      notes,
      first_contact_date,
      first_contact_time,
    } = this.state;

    return (
      <div className="col-md-5 m-auto ">
        <div className="card card-body mt-5 p-3 shadow">
          <h2 className="add-recruit-header">
            Add an Interested Study Participant
          </h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group m-4">
              <input
                className="form-control"
                placeholder="First Name"
                type="text"
                name="first_name"
                onChange={this.onChange}
                value={first_name}
              />
            </div>
            <div className="form-group m-4">
              <input
                className="form-control"
                placeholder="Last Name"
                type="text"
                name="last_name"
                onChange={this.onChange}
                value={last_name}
              />
            </div>
            <div className="form-group m-4">
              <input
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="form-group m-4">
              <ReactPhoneInput
                inputExtraProps={{
                  // name: "phone_number",
                  required: true,
                  autoFocus: true,
                }}
                defaultCountry={"sg"}
                value={phone_number}
                onChange={this.phoneOnChange}
              />
            </div>

            <div className="form-group m-4">
              <input
                placeholder="Age at the time of screen"
                className="form-control"
                type="text"
                name="age"
                onChange={this.onChange}
                value={age}
              />
            </div>
            <div className="form-group m-4">
              <input
                placeholder="Where/from whom did the study recruit hear about us?"
                className="form-control"
                type="text"
                name="referral_source"
                onChange={this.onChange}
                value={referral_source}
              />
            </div>
            <div className="form-group m-4">
              <textarea
                placeholder="Reason the study recruit is interested in participating"
                className="form-control"
                type="text"
                name="reason_interested"
                onChange={this.onChange}
                value={reason_interested}
              />
            </div>
            <div className="form-group m-4">
              <textarea
                placeholder="Additional Notes"
                className="form-control"
                type="text"
                name="notes"
                onChange={this.onChange}
                value={notes}
              />
            </div>
            <div className="form-group m-4">
              <label>Date of First Contact With Interested Participant</label>
              <input
                className="form-control"
                placeholder="Date of First Contact With Interested Participant"
                type="date"
                name="first_contact_date"
                onChange={this.onChange}
                value={first_contact_date}
              />
            </div>
            <div className="form-group m-4">
              <label>Time of First Contact With Interested Participant</label>
              <input
                className="form-control"
                type="time"
                name="first_contact_time"
                onChange={this.onChange}
                value={first_contact_time}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addRecruit })(Form);
