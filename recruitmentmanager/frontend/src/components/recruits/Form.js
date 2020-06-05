import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addRecruit } from '../../actions/recruits';


export class Form extends Component {
  state = {
    name: '',
    email: '',
    alert: '',
  }

  static propTypes = {
    addRecruit: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})
  
  onSubmit = e => {
    e.preventDefault
    
    const {first_name, last_name, email, phone, notes } = this.state;
    const recruit = { first_name, last_name, email, phone, notes };
    this.props.addRecruit(recruit)
    this.setState({
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      notes: ''
    });
  };

  render() {
    const { first_name, last_name, email, phone, notes } = this.state;

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Recruitment</h2>
        <form onSubmit = {this.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
            className="form-control"
            type="text"
            name="name"
            onChange={this.onChange}
            value={first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
            className="form-control"
            type="text"
            name="name"
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
            <label>Phone Number</label>
            <input
            className="form-control"
            type="number"
            name="phone"
            onChange={this.onChange}
            value={phone}
            />
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea
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