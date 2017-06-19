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
	render() {
		return (
			<SwatchWrapper>
				<ColorBox exactColor="palevioletred"/>
				<ColorInfo colorName="Pale Violet Red" colorCode="#db7093" />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
