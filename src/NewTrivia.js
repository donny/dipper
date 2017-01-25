import React, { Component } from 'react';
import './NewTrivia.css';

class NewTrivia extends Component {
  constructor(props) {
    super(props);
    this.newRandomTrivia = this.newRandomTrivia.bind(this);
    this.addNewTrivia = this.addNewTrivia.bind(this);
    this.getRandomIntInclusive = this.getRandomIntInclusive.bind(this);
    this.state = {
      types: ['Film', 'Person', 'Species', 'Planet', 'Starship', 'Vehicle'],
      counts: {Film: 7, Person: 87, Species: 37, Planet: 61, Starship:37, Vehicle:39}
    };
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  newRandomTrivia() {
    const counts = this.state.counts;
    const types = this.state.types;

    const randomType = this.getRandomIntInclusive(1, types.length) - 1;
    const randomId = this.getRandomIntInclusive(1, counts[types[randomType]]);

    this.addNewTrivia(types[randomType] + "-" + randomId);
  }

  addNewTrivia(trivia) {
    this.props.addNewTrivia(trivia);
  }

  render() {
    return (
      <div className="NewTrivia">
        <button className="Button" onClick={this.newRandomTrivia}>New Random Trivia</button>
      </div>
    )
  }
}

export default NewTrivia;
