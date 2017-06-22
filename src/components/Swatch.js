import React, { Component } from 'react';
import ColorBox from './ColorBox';
import ColorInfo from './ColorInfo';

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
				<ColorBox exactColor={this.state.color}/>
				<ColorInfo colorName={this.getColorName()} colorCode={this.getColorCode()} />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
