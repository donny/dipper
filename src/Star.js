import React, { Component } from 'react';
import './Star.css';
import Client from './Client';

class Star extends Component {

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello', message: 'Message'};
  }

  componentDidMount() {
    console.log('XX');

    Client.search('1', (foods) => {
      console.log('xxxaa');
      this.setState({
        message: "YO",
      });
    });
  }

  render() {
    return (
      <div className="Star">
        <h2>{this.state.greeting} to Star Wars -{this.state.message}-</h2>
      </div>
    );
  }
}

export default Star;
