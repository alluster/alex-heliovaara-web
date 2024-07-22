import styled, { css } from 'styled-components';
import React from 'react';

const Bg = styled.div`
    ${props => {
		if (props.themeColor === 'Brand') return css`
            background-color: ${props => props.theme.colors.brand};
        `;
        
		return css`
            background-color: ${props => props.theme.colors.brand};
        `;
	}}
	opacity: 0.8;
	height: inherit;
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
	min-height: inherit;
  
`;

const Overlay = (props) =>
	<Bg themeColor={props.themeColor} />;

export default Overlay;