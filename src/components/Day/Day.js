import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonDay = styled.button`
	width: 100px;
	height: 100px;
	border-radius: var(--border-radius-default);
	background-color: var(--red);
	color: var(--white);
	border: none;
	font-size: var(--fs-big);
	font-weight: bold;
	line-height: 0;
`

const Day = ({ label, path }) => {
	return (
		<Link to={path}>
			<ButtonDay>
				{label}
			</ButtonDay>
		</Link>
	);
}

export default Day;
