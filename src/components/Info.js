import React, { Component } from 'react';
import styled from 'styled-components';

const ColorName = styled.div`
	width: 100%;
	padding: 10%;
	background: #fff;

	& > * {
		font-size: 2em;
		font-family: 'Raleway';
		font-weight: 900;
		text-transform: uppercase;
		margin: 0;
		padding: 0;
	}
`;

class Info extends Component {
	render() {
		return (
			<ColorName>
				<h2>Pale Violet Red</h2>
			</ColorName>
		);
	}
}

export default Info;
