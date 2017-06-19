import React, { Component } from 'react';
import styled from 'styled-components';
import shuffle from '../img/shuffle.svg';

const GenerateIcon = styled.div`
	width: 20px;
	height: 20px;
`

const Generate = () => {
	return (
		<GenerateIcon>
			<img src={shuffle} alt="shuffle" />
		</GenerateIcon>
	)
}

export default Generate;
