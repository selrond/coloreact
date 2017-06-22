import React, { Component } from 'react';
import Generate from './Generate'
import styled from 'styled-components';

const ColorLayout = styled.div`
	background-color: ${props => props.exactColor};
	transition: background-color .3s ease-in-out;
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class ColorBox extends Component {
	render() {
		return (
			<ColorLayout {...this.props}>
				<Generate generateColor={this.props.generateColor} />
			</ColorLayout>
		);
	}
}

export default ColorBox;
