import React, { Component } from 'react';
import './NewTrivia.css';

class NewTrivia extends Component {
  constructor(props) {
    super(props);
    this.newRandomTrivia = this.newRandomTrivia.bind(this);
    this.addNewTrivia = this.addNewTrivia.bind(this);
  }

  newRandomTrivia() {
    console.log("New Random Trivia");
    this.addNewTrivia("Person-2");
  }

  addNewTrivia(trivia) {
    this.props.addNewTrivia(trivia);
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
