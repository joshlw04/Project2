import React from 'react';
import ComplaintForm from './ComplaintForm.jsx';
import ComplaintList from './ComplaintList.jsx';

const propTypes = {
  userComplaint: React.PropTypes.string,
  userRecipient: React.PropTypes.string,
  listOfComplaints: React.PropTypes.array,
  handleSubmit: React.PropTypes.func,
  handleInputChange: React.PropTypes.func,
};

class Home extends React.Component {
  render() {
    return (
      <div>
      <p>this is the Home component</p>
        <ComplaintList
          listOfComplaints={this.props.listOfComplaints}
        />
        <ComplaintForm
          userComplaint={this.props.userComplaint}
          userRecipient={this.props.userRecipient}
          handleInputChange={this.props.handleInputChange}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;

// stateless component that just renders the complaints in their various forms
// will need conditional statement about showing ComplaintForm component if user is logged in or not
