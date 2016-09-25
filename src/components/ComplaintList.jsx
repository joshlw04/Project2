import React, { Component } from 'react';
import request from 'superagent';
import Complaint from './Complaint.jsx';

const propTypes = {
};

class ComplaintList extends Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
    };
  }

  componentDidMount() {
    this.getComplaints();
  }

  getComplaints() {
    const baseURL = 'https://jtysk-react-project2.firebaseio.com/complaints.json';
    request.get(baseURL)
    .then((response) => {
      const complaintData = response.body;
      let complaints = [];
      if (complaintData) {
        complaints = Object.keys(complaintData).map((id) => {
          const individualCompData = complaintData[id];
          return {
            id,
            recipient: individualCompData.recipient,
            complaint: individualCompData.complaint,
          };
        });
      }
      this.setState({ complaints });
    });
  }

  render() {
    const complaintElements = this.state.complaints.map((complaint, idx) => {
      return (
        <li className="complaint-item" key={idx}>
          <Complaint
            complaint={complaint.complaint}
            recipient={complaint.recipient}
          />
        </li>
      );
    });

    return (
      <div id="window">
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
