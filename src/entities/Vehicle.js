import React, { Component } from 'react';
import './Vehicle.css';
import Remote from '../Remote';

class Vehicle extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/vehicles/${this.state.resId}/`, (data) => {
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
        <div className="Vehicle">
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Vehicle" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Vehicle</small>
          </div>
          <div className="Content-title">
            <h2>{this.state.data.name}</h2>
          </div>
          <ul>
            <li><strong>Model:</strong> {this.state.data.model}</li>
            <li><strong>Manufacturer:</strong> {this.state.data.manufacturer}</li>
            <li><strong>Cost In Credits:</strong> {this.state.data.cost_in_credits}</li>
            <li><strong>Length:</strong> {this.state.data.length}</li>
            <li><strong>Max Atmosphering Speed:</strong> {this.state.data.max_atmosphering_speed}</li>
            <li><strong>Crew:</strong> {this.state.data.crew}</li>
            <li><strong>Passengers:</strong> {this.state.data.passengers}</li>
            <li><strong>Cargo Capacity:</strong> {this.state.data.cargo_capacity}</li>
            <li><strong>Consumables:</strong> {this.state.data.consumables}</li>
            <li><strong>Vehicle Class:</strong> {this.state.data.vehicle_class}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Vehicle;
