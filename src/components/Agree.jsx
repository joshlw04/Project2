import React, { Component } from 'react';

const propTypes = {};

class Agree extends Component {
  constructor() {
    super();
    this.state = {
      agreeCount: 0,
      disagreeCount: 0,
    };
    this.handleAgreeClick = this.handleAgreeClick.bind(this);
    this.handleDisagreeClick = this.handleDisagreeClick.bind(this);
  }

  handleAgreeClick() {
    this.setState({
      agreeCount: (this.state.agreeCount + 1),
    });
  }

  handleDisagreeClick() {
    this.setState({
      disagreeCount: (this.state.disagreeCount + 1),
    });
  }

  render() {
    return (
      <div className="like-button">
        <ul className="actions">
          <li>
            <i className="ion-ios-flame" onClick={this.handleAgreeClick} />
            <span className="badge"> {this.state.agreeCount}</span>
          </li>
          <li>
            <i className="ion-ios-snowy" onClick={this.handleDisagreeClick} />
            <span className="badge"> {this.state.disagreeCount}</span>
          </li>
        </ul>
      </div>
    );
  }
}

Agree.propTypes = propTypes;

export default Agree;

// TODO: refactor agree/disagree click functions into one
// TODO: why do I need to bind methods inside a component if theyre not getting passed as props?
