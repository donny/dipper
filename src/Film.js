import React, { Component } from 'react';
import './Film.css';
import Remote from './Remote';

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/films/${this.state.resId}/`, (data) => {
      console.log(data);
      this.setState({
        data: data,
        fetching: false
      });
    });
  }

  render() {
    if (this.state.fetching) {
      return (
        <div className="Film">
          <div className="Content">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Film" onClick={this.handleClick}>
          <div className="Content">
            <h2>{this.state.data.title}</h2>
            <ul>
              <li>Release Date: {this.state.data.release_date}</li>
              <li>Director: {this.state.data.director}</li>
              <li>Producer: {this.state.data.producer}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Film;
