import React, { Component } from 'react';
import './Person.css';
import Remote from './Remote';

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, data: {} };
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
    });
  }

  render() {
    if (this.state.fetching) {
      return (
        <div className="Person">
          <div className="Content">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Person" onClick={this.handleClick}>
          <div className="Content">
            <h2>{this.state.data.name}</h2>
            <ul>
              <li>Height: {this.state.data.height}</li>
              <li>Mass: {this.state.data.mass}</li>
              <li>Hair Color: {this.state.data.hair_color}</li>
              <li>Skin Color: {this.state.data.skin_color}</li>
              <li>Eye Color: {this.state.data.eye_color}</li>
              <li>Birth Year: {this.state.data.birth_year}</li>
              <li>Gender: {this.state.data.gender}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Person;
