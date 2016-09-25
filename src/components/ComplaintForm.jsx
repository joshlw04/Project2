import React, { Component } from 'react';
import request from 'superagent';

class ComplaintForm extends Component {
  constructor() {
    super();
    this.state = {
      recipient: '',
      complaint: '',
    };

    this.handleChangeOfInput = this.handleChangeOfInput.bind(this); // TODO: why do I have to bind this method if it is inside the compononet im using it in?
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChangeOfInput(e) { // (e) is the event, in this case the input of characters into either the recipeint or complaint field
    const stateObj = {}; // create an empty 'state'
    const stateKey = e.target.name; // assign a new variable to the 'name' attribute of the targeted event
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
    console.log(stateObj);
  }

  handleSubmit(e) {
    e.preventDefault();
    const recipient = this.state.recipient;
    const complaint = this.state.complaint;
    console.log(recipient, complaint);
    const url = 'https://jtysk-react-project2.firebaseio.com/complaints.json';
    request.post(url).send({ complaint, recipient }).then(() => {
      this.setState({ recipient, complaint });
      // this.getComplaints();
    });
  }


  render() {
    return (
      <div id="input-form">
        <input type="text" name="recipient" id="recipient-input" placeholder="Who's got you miffed?" onChange={this.handleChangeOfInput} />
        <br />
        <input type="text" name="complaint" id="complaint-input" placeholder="What should they know?" onChange={this.handleChangeOfInput} />
        <br />
        <input type="submit" name="submit" id="submit" placeholder="Make Complaint" onClick={this.handleSubmit} />
        <br />
      </div>
    );
  }
}
export default ComplaintForm;

/*
*/
