import React, { Component } from 'react';
import request from 'superagent';
import Home from './Home.jsx';
import Nav from './Nav.jsx';
import firebase from '../../firebase.config.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      complaints: [],
      complaint: '',
      recipient: '',
      isLoggedIn: false,
    };
    this.handleChangeOfInput = this.handleChangeOfInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.logInChangeState = this.logInChangeState.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    this.signOutUser = this.signOutUser.bind(this);
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

  handleLoginSubmit() {
    const { username, password } = this.state;
    firebase.auth()
    .signInWithEmailAndPassword(username, password)
    .catch((err) => {
      console.log(err);
    }).then(() => {
      this.setState({ isLoggedIn: true });
    });
  }

  handleRegisterSubmit() {
    const { username, password } = this.state;
    firebase.auth()
    .createUserWithEmailAndPassword(username, password)
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(`${errorCode}: ${errorMessage}`);
    })
    .then((user) => {
      firebase.database().ref('Complainers')
      .child(user.uid)
      .set({ username: username, email: '', userID: user.uid });
    })
    .then(() => {
      this.props.router.push('/home')
    });
  }

  logInChangeState() {
    this.setState({ isLoggedIn: true });
  }

  signOutUser() {
    firebase.auth()
    .signOut()
    .then(() => {
      this.setState({ isLoggedIn: false });
    });
  }

  render() {
    return (
      <div>
        <div className="title-section">
          <div className="title-wrapper">
            <div className="title">
              JUST THOUGHT
              <br />
              YOU SHOULD KNOW..<br />
            </div>
            <div className="subtitle">
              A website for people <br />
              who don't like other people
            </div>
          </div>
        </div>
        <Nav
          isLoggedIn={this.state.isLoggedIn}
          logInChangeState={this.logInChangeState}
          handleChangeOfInput={this.handleChangeOfInput}
          handleLoginSubmit={this.handleLoginSubmit}
          signOutUser={this.signOutUser}
          handleRegisterSubmit={this.handleRegisterSubmit}
        />
        <Home
          isLoggedIn={this.state.isLoggedIn}
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
