import React, { Component } from 'react';
import Color from './Color';
import Info from './Info';

class Swatch extends Component {
  render() {
    return (
      <div>
      	<Color />
      	<Info />
      </div>
    );
  }
}

export default Swatch;
