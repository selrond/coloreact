import React, { Component } from 'react';
import ColorBox from './ColorBox';
import ColorInfo from './ColorInfo';
import '../vendor/ntc.js';

import styled from 'styled-components';

const SwatchWrapper = styled.div`
	position: relative;
	font-size: 1rem;
	box-shadow: 2px 2px 7px rgba(50, 50, 50, .2);
	top: 10vh;
	max-width: 400px;
`;

function randomColorGenerator() {
	var randomColor = "";
	const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	var randomHexNum = function() {
		return hexNums[Math.floor(Math.random() * hexNums.length)];
	};
	for (let i = 0; i < 6; i++) {
		randomColor += randomHexNum();
	}
	return "#" + randomColor;
};

function generateColor(e) {
	e.preventDefault();
	console.log(randomColorGenerator());
}

class Swatch extends Component {
	constructor() {
		super();
		this.state = {
			color: "palevioletred"
		};
	}

	getColorName() {
		return "got name"
	}

	getColorCode() {
		return "got code"
	}

	render() {
		return (
			<SwatchWrapper>
				<ColorBox exactColor={this.state.color} generateColor={this.generateColor()} />
				<ColorInfo colorName={this.getColorName()} colorCode={this.getColorCode()} />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
