import React, { Component } from 'react';
import './Planet.css';
import Remote from '../Remote';

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, error: false, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/planets/${this.state.resId}/`, (data) => {
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
        <div className="Planet">
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else if (this.state.error) {
      return (
        <div className="Planet">
          <div className="Content-loading">
            <h6>Error in retrieving Planet:{this.state.resId}</h6>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Planet" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Planet</small>
          </div>
          <div className="Content-title">
            <h2>{this.state.data.name}</h2>
          </div>
          <ul>
            <li><strong>Rotation Period:</strong> {this.state.data.rotation_period}</li>
            <li><strong>Orbital Period:</strong> {this.state.data.orbital_period}</li>
            <li><strong>Diameter:</strong> {this.state.data.diameter}</li>
            <li><strong>Climate:</strong> {this.state.data.climate}</li>
            <li><strong>Gravity:</strong> {this.state.data.gravity}</li>
            <li><strong>Terrain:</strong> {this.state.data.terrain}</li>
            <li><strong>Surface Water:</strong> {this.state.data.surface_water}</li>
            <li><strong>Population:</strong> {this.state.data.population}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Planet;
