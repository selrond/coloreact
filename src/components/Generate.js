import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

const GenerateIconWrapper = styled.div`
	width: 9%;
	height: 9%;
	cursor: pointer;
`
const GenerateIcon = styled.svg`
	width: 100%;
	height: auto;
`;

const Generate = (props) => {
	return (
		<GenerateIconWrapper onClick={(e) => props.generateColor(e)}>
			<GenerateIcon xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path fill="none" stroke="#FFF" strokeWidth="2" d="M16 3h5v5M4 20L21 3m0 13v5h-5m-1-6l6 6M4 4l5 5" strokeLinecap="round" strokeLinejoin="round"/>
			</GenerateIcon>
		</GenerateIconWrapper>
	)
}

// GenerateIconWrapper.propTypes = {
// 	onClick: PropTypes.func.isRequired
// }

export default Generate;
