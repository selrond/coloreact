import React, { Component } from 'react';
import Generate from './Generate'
import styled from 'styled-components';

const ColorBox = styled.div`
	background-color: palevioletred;
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class ColorLayout extends Component {
  render() {
    return (
      <ColorBox>
      	<Generate />
      </ColorBox>
    );
  }
}

export default ColorLayout;
