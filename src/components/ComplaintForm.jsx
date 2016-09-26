import React, { Component } from 'react';

const propTypes = {
  // userRecipient: React.PropTypes.string,
  // userComplaint: React.PropTypes.string,
  handleInputChange: React.PropTypes.func,
  handleSubmit: React.PropTypes.func,
};

class ComplaintForm extends Component {
  render() {
    return (
      <div id="input-form">
      <p>this is the ComplaintForm component</p>
        <input type="text" name="recipient" id="recipient-input" placeholder="Who's got you miffed?" onChange={this.props.handleInputChange} />
        <br />
        <input type="text" name="complaint" id="complaint-input" placeholder="What should they know?" onChange={this.props.handleInputChange} />
        <br />
        <input type="submit" name="submit" id="submit" placeholder="Make Complaint" onClick={this.props.handleSubmit} />
        <br />
      </div>
    );
  }
}

ComplaintForm.propTypes = propTypes;

export default ComplaintForm;

/*
*/
