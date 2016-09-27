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
      <div className="complaint-form-wrapper">
        <div className="complaint-form">

          <div className="col-2">
            <b>DEAR,</b>
            <input type="text" name="recipient" id="recipient-input" className="input" placeholder="Person's Name" onChange={this.props.handleInputChange} />
            <br />
          </div>

          <div className="col-2">
            <b>JUST THOUGHT YOU SHOULD KNOW...</b>
            <textarea type="text" name="complaint" className="input" id="complaint-input" rows="4" placeholder="What should they know?" onChange={this.props.handleInputChange} ></textarea>
            <br />
            <input type="submit" name="submit" id="submit" className="submit" placeholder="Submit" onClick={this.props.handleSubmit} />
            <br />
          </div>

        </div>
      </div>
    );
  }
}

ComplaintForm.propTypes = propTypes;

export default ComplaintForm;

/*
*/
