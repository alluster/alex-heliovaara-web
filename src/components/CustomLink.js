import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Styled = styled.div`
		margin-right: 10px;
		color: ${props => props.theme.colors.fontDark};
	`;

const CustomLink = ({ children, to }) => {
	return (
		<Link to={to}  >
			<Styled >
				{children}
			</Styled>
		</Link>

	);
};

export default CustomLink;