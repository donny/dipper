import React, { Component } from 'react';
import './Species.css';
import Remote from './Remote';

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = { resId: props.resId, fetching: true, data: {} };
  }

  handleClick() {
    console.log("click");
  }

  componentDidMount() {
    Remote.get(`/species/${this.state.resId}/`, (data) => {
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
        <div className="Species">
          <div className="Content">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Species" onClick={this.handleClick}>
          <div className="Content">
            <h2>{this.state.data.name}</h2>
            <ul>
              <li>Classification: {this.state.data.classification}</li>
              <li>Designation: {this.state.data.designation}</li>
              <li>Average Height: {this.state.data.average_height}</li>
              <li>Skin Colors: {this.state.data.skin_colors}</li>
              <li>Hair Colors: {this.state.data.hair_colors}</li>
              <li>Eye Colors: {this.state.data.eye_colors}</li>
              <li>Average Lifespan: {this.state.data.average_lifespan}</li>
              <li>Language: {this.state.data.language}</li>
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default Species;
