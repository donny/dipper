import React, { Component } from 'react';
import './Person.css';
import Remote from '../Remote';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, error: false, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/people/${this.state.resId}/`, (data) => {
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
        <div className="Person">
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="Person">
          <div className="Content-loading">
            <h6>Error in retrieving Person:{this.state.resId}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Person" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Person</small>
          </div>
          <div className="Content-title">
            <h2>{this.state.data.name}</h2>
          </div>
          <ul>
            <li><strong>Height:</strong> {this.state.data.height}</li>
            <li><strong>Mass:</strong> {this.state.data.mass}</li>
            <li><strong>Hair Color:</strong> {this.state.data.hair_color}</li>
            <li><strong>Skin Color:</strong> {this.state.data.skin_color}</li>
            <li><strong>Eye Color:</strong> {this.state.data.eye_color}</li>
            <li><strong>Birth Year:</strong> {this.state.data.birth_year}</li>
            <li><strong>Gender:</strong> {this.state.data.gender}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Person;
