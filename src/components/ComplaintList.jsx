import React, { Component } from 'react';
import request from 'superagent';
import Complaint from './Complaint.jsx';

const propTypes = {
  listOfComplaints: React.PropTypes.array,
};

class ComplaintList extends Component { // TODO stateless component, but IDK how to pass in props if the component is just a const...
  render() {
    const complaintElements = this.props.listOfComplaints.map((complaint, idx) => {
      return (
        <li className="complaint-item" key={idx}>
          <Complaint
            complaint={complaint.complaint}
            recipient={complaint.recipient}
            id={complaint.idx}
          />
        </li>
      );
    });

    return (
      <div id="window">
      this is the ComplaintList component
        <ul>
          {complaintElements}
        </ul>
      </div>
    );
  }
}


ComplaintList.propTypes = propTypes;

export default ComplaintList;

// we need to pull down a method from Main to add complaints here
