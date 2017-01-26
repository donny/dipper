import React, { Component } from 'react';
import './Film.css';
import Remote from '../Remote';

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, error: false, data: {} };
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
    }).catch( (error) => {
      this.setState({
        fetching: false,
        error: true
      });
    });
  }

  render() {
    if (this.state.fetching) {
      return (
        <div className="Film">
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="Film">
          <div className="Content-loading">
            <h6>Error in retrieving Film:{this.state.resId}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Film" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Film</small>
          </div>
          <div className="Content-title">
            <h2>{this.state.data.title}</h2>
          </div>
          <ul>
            <li><strong>Release Date:</strong> {this.state.data.release_date}</li>
            <li><strong>Director:</strong> {this.state.data.director}</li>
            <li><strong>Producer:</strong> {this.state.data.producer}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Film;
