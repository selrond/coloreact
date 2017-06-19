import React, { Component } from 'react';
import Generate from './Generate'
import styled from 'styled-components';

const ColorLayout = styled.div`
	background-color: ${props => props.exactColor};
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.generateColor = this.generateColor.bind(this);
		}

	generateColor(e) {
		e.preventDefault();
		console.log('I was clicked');
	}

	render() {
		return (
			<ColorLayout {...this.props}>
				<Generate onClick={this.generateColor} />
			</ColorLayout>
		);
	}
}

export default ColorBox;
