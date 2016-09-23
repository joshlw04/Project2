import React, { Component } from 'react';
import Complaint from './Complaint.jsx';

class ComplaintList extends Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
    };
  }

  render() {
    return (
      <div id="window">
        <ul>
        <h1>this is the complaint list</h1>
          {/* <Complaint />
          <Complaint />
          <Complaint />
          <Complaint /> */}
        </ul>
      </div>
    );
  }
}

export default ComplaintList;

// we need to pull down a method from Main to add complaints here
