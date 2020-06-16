import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { getRecruits, deleteRecruit } from '../../actions/recruits';

export class Recruits extends Component {
  static propTypes = {
    recruits: PropTypes.array.isRequired,
    getRecruits: PropTypes.func.isRequired,
    deleteRecruit: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getRecruits();
  }

  render() {
    return (
      <Fragment>
        <h2>Potential Study Recruits</h2>
        <table className="table table-hover">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Notes</th>
              <th/>
            </tr>
          </thead>
          <tbody>
            {this.props.recruits.map((recruit) => (
            <tr key={recruit.id}>
              <td>{recruit.id}</td>
              <td>{recruit.first_name}</td>
              <td>{recruit.last_name}</td>
              <td>{recruit.email}</td>
              <td>{recruit.phone}</td>
              <td>{recruit.notes}</td>
              <td>
                <button onClick={this.props.deleteRecruit.bind(this, recruit.id)} className="btn btn-danger btn-sm">
                  {''}
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  recruits: state.recruits.recruits
})

export default connect(mapStateToProps, { getRecruits, deleteRecruit })(Recruits);