import React from 'react';
import ComplaintForm from './ComplaintForm.jsx';
import ComplaintList from './ComplaintList.jsx';

const propTypes = {
  userComplaint: React.PropTypes.string,
  userRecipient: React.PropTypes.string,
  listOfComplaints: React.PropTypes.array,
  handleSubmit: React.PropTypes.func,
  handleInputChange: React.PropTypes.func,
  isLoggedIn: React.PropTypes.bool,
};

class Home extends React.Component {
  render() {
    return (
      <div>
        { this.props.isLoggedIn ?
          <ComplaintForm
            userComplaint={this.props.userComplaint}
            userRecipient={this.props.userRecipient}
            handleInputChange={this.props.handleInputChange}
            handleSubmit={this.props.handleSubmit}
          /> : <div></div> }
        <a name="you-should-know"></a>
        <ComplaintList
          listOfComplaints={this.props.listOfComplaints}
        />
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
