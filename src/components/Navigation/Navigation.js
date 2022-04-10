import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const Nav = styled.nav`
	background-color: var(--red);
	width: 100%;
	height: 70px;
	position: absolute;
	bottom: 0;
	display: flex;
	align-items: center;
`;

const Return = styled(Link)`
	width: 50px;
	height: 50px;
	display: flex;
	background-color: rgba(0,0,0, 0.15);
	border-radius: var(--border-radius-default);
	position: relative;
	margin: 10px;
	justify-content: center;
	align-items: center;
`

const Label = styled.span`
	color: white;
	font-weight: bold;
	text-transform: uppercase;
	text-decoration: none;
	align-items: center;
	font-size: calc(var(--fs-big) / 1.5);
	text-align: center;
	position: absolute;
	margin-block-start: 0;
	margin-block-end: 0;
`

const Navigation = () => {
	return (
		<Nav>
			<Return to="/">
				<Label>B</Label>
			</Return>
		</Nav>
	);
}

export default Navigation;
