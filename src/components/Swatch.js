import React, { Component } from 'react';
import ColorBox from './ColorBox';
import ColorInfo from './ColorInfo';
import ntc from 'ntc';
import styled from 'styled-components';

const SwatchWrapper = styled.div`
	position: relative;
	font-size: 1rem;
	box-shadow: 2px 2px 7px rgba(50, 50, 50, .2);
	top: 10vh;
	max-width: 400px;
`;

class Swatch extends Component {
	constructor() {
		super();
		this.state = {
			colorCode: "#000",
			colorName: "black"
		};

		this.generateColor = this.generateColor.bind(this);
	}


	randomColorGenerator() {
		var randomColor = "";
		const hexNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
		var randomHexNum = function() {
			return hexNums[Math.floor(Math.random() * hexNums.length)];
		};
		for (let i = 0; i < 6; i++) {
			randomColor += randomHexNum();
		}
		return "#" + randomColor;
	}

	generateColor() {
		const generatedColor = this.randomColorGenerator();
		const colorName = ntc.name(generatedColor)[1];

		this.setState(function (state, props) {
			return {
				colorCode: generatedColor,
				colorName: colorName
			}
		});
	}

	getColorName() {
		console.log(window)
	}

	getColorCode() {
		console.log('getColorCode');
	}

	componentWillMount() {
		this.generateColor();
	}

	render() {
		return (
			<SwatchWrapper>
				<ColorBox exactColor={this.state.colorCode} generateColor={this.generateColor} />
				<ColorInfo colorName={this.state.colorName} colorCode={this.state.colorCode} />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
