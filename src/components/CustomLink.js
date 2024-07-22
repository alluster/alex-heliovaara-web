import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	Link
} from 'gatsby';

function CustomLink({ children, to }) {
	const Styled = styled.div`
		margin-right: 10px;
		color: ${props => props.theme.colors.white};
		
	`;



	return (
		<Link to={to}  >
			<Styled >
				{children}
			</Styled>
		</Link>

	);
}

CustomLink.propTypes = {
	children: PropTypes.any,
	to: PropTypes.any,
	theme: PropTypes.any,
	pathName: PropTypes.string,
	color: PropTypes.any,
	activeColor: PropTypes.any

};
export default CustomLink;