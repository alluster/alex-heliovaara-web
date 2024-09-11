import React from 'react';
import { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import theme from '../theme';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components';

import { device } from '../device';

const GlobalStyle = createGlobalStyle`
    body, html {
	    scroll-behavior: smooth;
		scrollbar-width: none; 
        margin: 0px;
        padding: 0px;
		max-width: 100% ;
		min-height: 100vh;
		font-family: 'Questrial', sans-serif !important;
		font-display: swap;
		color: ${props => props.theme.colors.fontDark};
		hyphens: manual;
		text-rendering: optimizeLegibility;
		// background-color: ${props => props.theme.colors.black};
		overflow-x: hidden;
		transition: background-color  ease; // Add transition for smooth background color change

		${props => props.changeBackgroundColor && css`
			background-color: ${props => props.changeBackgroundColor}; // Change this to your selected color
					`}
			}
    
    h1 {
		font-size: 40px;
		margin: 14px 0px 14px 0px !important;
		line-height: 44px;
		letter-spacing: 0.01em;
		font-weight: 300;
		hyphens: none;
		@media ${device.laptop} {
			font-size: 65px;
			line-height: 60px;
			margin-top: 20px;
			margin-bottom: 20px;
			hyphens: auto;
			// letter-spacing: 0px;
			-webkit-hyphens: none;
			-moz-hyphens: none;
			hyphens: none;
		}
	}	
    h2 {
		font-size: 34px;
		line-height: 36px;
		// margin-top: 24px;
		// margin-bottom: 24px;
		font-weight: 400;
		letter-spacing: 0.01em;
		@media ${device.tablet} {
			font-size: 38px;
			line-height: 40px;
			margin-bottom: 0px;

		 }
    }
    h3 {
		// font-family: 'Libre Baskerville', sans-serif !important;
		font-size: 26px;
		line-height: 30px;
		// margin-top: 24px;
		// margin-bottom: 24px;
		font-weight: 400;
		letter-spacing: 0.01em;
		@media ${device.tablet} {
			font-size: 22.78px;
			line-height: 32px;
			margin-bottom: 0px;

		 }
    }
    h4 {
		font-size: 20px;
		line-height: 24px;
		// margin-top: 24px;
		// margin-bottom: 24px;
		font-weight: 400;
		letter-spacing: 0.01em;
		@media ${device.tablet} {
			font-size: 28px;
			line-height: 33px;
			margin-bottom: 0px;

		 }
    }
    h5 {
		font-size: 18px;
		line-height: 22px;
		// margin-top: 16px;
		// margin-bottom: 16px;
		font-weight: 400;
		letter-spacing: 0.01em;
		@media ${device.tablet} {
			font-size: 18px;
			line-height: 24px;
		 }
    }
    h6 {
		font-size: 16px;
		line-height: 20px;
		// margin-top: 16px;
		// margin-bottom: 16px;
		font-weight: 400;
		letter-spacing: 0.01em;
		@media ${device.tablet} {
			font-size: 16px;
			line-height: 24px;
		 }
	}
	p {
		font-size: 18px;
    	line-height: 24px;
		margin-top: 16px;
		letter-spacing: 0.03em;
		margin-bottom: 16px;
		font-weight: 400;
		@media ${device.tablet} {
			font-size: 16px;
			line-height: 24px;
		 }
	}
	li {
		font-size: 18px !important;
    	line-height: 24px;
		letter-spacing: 0.03em;
		font-weight: 400;
		@media ${device.tablet} {
			font-size: 16px !important;
			line-height: 24px;
		 }
	}
    img {
        max-width: 100%;
    }
    a {
		text-decoration: none !important;
		all: unset;
    }
	
    a:link {
		text-decoration: none !important;
		::-webkit-any-link {
			text-decoration: none !important;
		}
    }
    a:focus {
		text-decoration: none !important;
    }
    a:active {
		text-decoration: none !important;
    }
    a:visited {
		text-decoration: none !important;
    }
    a:hover {
		cursor: pointer !important;
		text-decoration: none !important;
    }
    button {
		all: unset;
		font-family: 'Open Sans', sans-serif;
		

	}
	button:hover {
		cursor: pointer !important;
	}



textarea {
	all: unset;
	font-family: 'Open Sans', sans-serif;

}

    input {
		all: unset;
		font-family: 'Open Sans', sans-serif;

        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    
    
`;
const BackgroundImage = styled.img`
	z-index: 1;
	position: fixed;
	top: 0px;
	height: 100vh;
	width: 100%;
	opacity: 0.1;
	margin-left: auto;
	margin-right: auto;
`;

const Divider = styled.div`
@media ${device.laptop} {
		height: 20px;
 	}

	height: 160px;
`;

export default function Layout({ children, page, changeBackground, changeBackgroundColor }) {




	return (
		<React.Fragment>

			<ThemeProvider theme={theme}>
				<GlobalStyle changeBackground={changeBackground} changeBackgroundColor={changeBackgroundColor} />
				{/* {
					page === 'home' || 'services' ?
						<BackgroundImage src="/bg-circle.svg" />
						: null
				} */}
				{
					page === 'home' ?
						<Navigation /> : <Navigation />
				}
				{children}
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	);
}