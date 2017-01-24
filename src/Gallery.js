import React, { Component } from 'react';
import './Gallery.css';
import Masonry from 'react-masonry-component'
import Film from './Film'
import Person from './Person'
import Species from './Species'

class Gallery extends Component {
  handleClick() {
    console.log("CLICK");
  }

  render() {
    return (
      <div className="Gallery">
        <Masonry onClick={this.handleClick}>
          <Film resId="1"/>
          <Person resId="1"/>
          <Film resId="2"/>
          <Species resId="1"/>
          <Film resId="3"/>
          <Person resId="2"/>
          <Species resId="2"/>
          <Species resId="3"/>
          <Person resId="3"/>
          <Film resId="4"/>


          <Species resId="4"/>

          <Person resId="4"/>


        </Masonry>
      </div>
    );
  }
}

export default Gallery;
