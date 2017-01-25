import React, { Component } from 'react';
import './Starship.css';
import Remote from '../Remote';

class Starship extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/starships/${this.state.resId}/`, (data) => {
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
        <div className="Starship">
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Starship" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Starship</small>
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
            <li><strong>Hyperdrive Rating:</strong> {this.state.data.hyperdrive_rating}</li>
            <li><strong>MGLT:</strong> {this.state.data.MGLT}</li>
            <li><strong>Starship Class:</strong> {this.state.data.starship_class}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Starship;
