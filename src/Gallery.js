import React, { Component } from 'react';
import './Gallery.css';
import Masonry from 'react-masonry-component'
import NewTrivia from './NewTrivia'
import Film from './entities/Film'
import Person from './entities/Person'
import Species from './entities/Species'
import Planet from './entities/Planet'
import Starship from './entities/Starship'
import Vehicle from './entities/Vehicle'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { trivias: [] };
    this.addNewTrivia = this.addNewTrivia.bind(this);
  }

  addNewTrivia(trivia) {
    // Need to calculate a unique key since we might have the same trivias twice (random).
    const key = new Date().getTime();
    this.setState({ trivias: [...this.state.trivias, trivia + '-' + key] });
  }

  renderTrivia(trivia) {
    const type = trivia.split('-')[0];
    const resId = trivia.split('-')[1];
    const key = trivia.split('-')[2];

    if (type.includes('Film')) {
      return (<Film key={key} resId={resId}/>)
    } else if (type.includes('Person')) {
      return (<Person key={key} resId={resId}/>)
    } else if (type.includes('Species')) {
      return (<Species key={key} resId={resId}/>)
    } else if (type.includes('Planet')) {
      return (<Planet key={key} resId={resId}/>)
    } else if (type.includes('Starship')) {
      return (<Starship key={key} resId={resId}/>)
    } else if (type.includes('Vehicle')) {
      return (<Vehicle key={key} resId={resId}/>)
    }
  }

  renderTrivias() {
    return this.state.trivias.map(trivia => this.renderTrivia(trivia));
  }

  render() {
    return (
      <div className="Gallery">
        <NewTrivia addNewTrivia={this.addNewTrivia}/>
        <Masonry>
          {this.renderTrivias()}
        </Masonry>
      </div>
    );
  }
}

export default Gallery;
