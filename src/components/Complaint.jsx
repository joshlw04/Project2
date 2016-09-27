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
        <Agree />
        <div className="content">
          <span className="recipient">{ this.recipient }</span>,
          <span className="the-complaint"> { this.complaint }</span>
        </div>
      </div>
    );
  }
}

Complaint.propTypes = propTypes;

export default Complaint;

// TODO: if i make the propTypes required, i get a warning. figure it out.
