import React, { Component } from 'react';
import Agree from './Agree.jsx';

const propTypes = {
  recipient: React.PropTypes.string,
  complaint: React.PropTypes.string,
};

class Complaint extends Component {
  constructor(props) {
    super(props);
    this.recipient = this.props.recipient;
    this.complaint = this.props.complaint;
  }

  render() {
    return (
      <div>
        <p>Hey { this.recipient }, { this.complaint }.</p>
        <Agree />
      </div>
    );
  }
}

Complaint.propTypes = propTypes;

export default Complaint;

// TODO: if i make the propTypes required, i get a warning. figure it out.


// this needs the props from ComplaintForm: recipient and complaint

/*
 props passed to agree:
agreeCount: React.PropTypes.number,
handleAgreeClick: React.PropTypes.func,







*/
