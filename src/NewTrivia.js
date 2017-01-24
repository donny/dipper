import React, { Component } from 'react';
import './NewTrivia.css';

class NewTrivia extends Component {
  constructor(props) {
    super(props);
    this.newRandomTrivia = this.newRandomTrivia.bind(this);
    this.state = { resId: props.resId, fetching: true, data: {} };
  }

  newRandomTrivia() {
    console.log("New Random Trivia");
  }

  render() {
    return (
      <div className="NewTrivia">
        <button onClick={this.newRandomTrivia}>New Random Trivia</button>
      </div>
    )

  }
}

export default NewTrivia;
