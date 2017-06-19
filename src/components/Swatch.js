import React, { Component } from 'react';
import ColorLayout from './ColorLayout';
import InfoLayout from './InfoLayout';

import styled from 'styled-components';

const SwatchWrapper = styled.div`
	font-size: 1rem;
	box-shadow: 2px 2px 7px rgba(50, 50, 50, .2);
`;

class Swatch extends Component {
	render() {
		return (
			<SwatchWrapper>
				<ColorLayout />
				<InfoLayout />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
