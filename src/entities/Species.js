import React, { Component } from 'react';
import './Species.css';
import Remote from '../Remote';

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
          <div className="Content-loading">
            <h2>Loading...</h2>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Species" onClick={this.handleClick}>
          <div className="Content-type">
            <small>Category: Species</small>
          </div>
          <div className="Content-title">
            <h2>{this.state.data.name}</h2>
          </div>
          <ul>
            <li><strong>Classification</strong>: {this.state.data.classification}</li>
            <li><strong>Designation</strong>: {this.state.data.designation}</li>
            <li><strong>Average Height</strong>: {this.state.data.average_height}</li>
            <li><strong>Skin Colors</strong>: {this.state.data.skin_colors}</li>
            <li><strong>Hair Colors</strong>: {this.state.data.hair_colors}</li>
            <li><strong>Eye Colors</strong>: {this.state.data.eye_colors}</li>
            <li><strong>Average Lifespan</strong>: {this.state.data.average_lifespan}</li>
            <li><strong>Language</strong>: {this.state.data.language}</li>
          </ul>
        </div>
      );
    }
  }
}

export default Species;
