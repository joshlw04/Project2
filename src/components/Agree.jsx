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
    // console.log('state agreeCount:', this.state);
  }

  handleDisagreeClick() {
    this.setState({
      disagreeCount: (this.state.disagreeCount + 1),
    });
    // console.log('state disagreeCount:', this.state);
  }

  render() {
    return (
      <div className="like-button">
        <p>{this.state.agreeCount}</p>
        <button onClick={this.handleAgreeClick}>Agree</button>
        <p>{this.state.disagreeCount}</p>
        <button onClick={this.handleDisagreeClick}>Disagree</button>
      </div>
    );
  }
}

Agree.propTypes = propTypes;

export default Agree;

// TODO: refactor agree/disagree click functions into one
// TODO: why do I need to bind methods inside a component if theyre not getting passed as props?
// for Complaint:
// handleDeleteClick() {
//   this.props.handleDelete(this.props.id);
// }
//
// for App:
// httpDeletePost(id) {
//   const url = `https://meerkats-e16d1.firebaseio.com/posts/${id}.json`;
//   request.del(url).then(() => {
//     this.httpGetPosts();
//   });
// }


// this is for Complaint, to pass down props
{/* <LikeButton
  handleLikeClick={this.handleLikeClick}
  likeCount={this.props.likeCount}
/> */}
