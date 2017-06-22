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
	render() {
		return (
			<ColorLayout {...this.props}>
				<Generate onClick={this.props.generateColor} />
			</ColorLayout>
		);
	}
}

export default ColorBox;
