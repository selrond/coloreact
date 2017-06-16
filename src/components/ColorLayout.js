import React, { Component } from 'react';
import styled from 'styled-components';

const ColorBox = styled.div`
	width: 400px;
	height: 400px;
	background-color: palevioletred;
`;

class ColorLayout extends Component {
  render() {
    return (
      <ColorBox />
    );
  }
}

export default ColorLayout;
