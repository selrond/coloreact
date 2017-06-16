import React, { Component } from 'react';
import ColorLayout from './ColorLayout';
import InfoLayout from './InfoLayout';

import styled from 'styled-components';

const SwatchWrapper = styled.div`
	box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
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
