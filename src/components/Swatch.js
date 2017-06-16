import React, { Component } from 'react';
import Color from './Color';
import Info from './Info';

import styled from 'styled-components';

const SwatchWrapper = styled.div`
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
`;

class Swatch extends Component {
	render() {
		return (
			<SwatchWrapper>
				<Color />
				<Info />
			</SwatchWrapper>
		);
	}
}

export default Swatch;
