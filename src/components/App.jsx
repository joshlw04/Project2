import React, { Component } from 'react';
import request from 'superagent';
import Home from './Home.jsx';
import Nav from './Nav.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
      complaint: '',
      recipient: '',
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
      // console.log(this.state.complaints);
    });
  }

  handleChangeOfInput(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const recipient = this.state.recipient;
    const complaint = this.state.complaint;
    const newDate = new Date();
    const date = newDate.getTime();
    const url = 'https://jtysk-react-project2.firebaseio.com/complaints.json';
    request.post(url).send({ recipient, complaint, date }).then(() => {
      this.setState({ recipient, complaint, date });
      document.querySelector('#recipient-input').value = '';
      document.querySelector('#complaint-input').value = '';
      this.getComplaints();
    });
  }

  render() {
    return (
      <div>
        <p>This is the App component</p>
        <Nav />
        <Home
          userComplaint={this.state.complaint}
          userRecipient={this.state.recipient}
          listOfComplaints={this.state.complaints}
          handleInputChange={this.handleChangeOfInput}
          handleSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}

export default App;
