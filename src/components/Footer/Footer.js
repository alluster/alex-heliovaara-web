import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';
import Container from '../Container/Container';

library.add(faBehance, faLinkedin);

const CustomContainer = styled.div`
		position: relative;
		z-index: 3;
		// background-color: ${props => props.theme.colors.black};
		height: 100%;
		margin-top: 150px;
		// padding-bottom: 100px;
		@media ${device.laptop} {
			margin-top: 0px;
	
		}
	
`;

const Content = styled.div`
		// max-width: 1500px;
		margin-left:auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		padding-top: 64px;
		// padding-bottom: 64px;
		color: ${props => props.theme.colors.fontDark};
		@media ${device.laptop} {
			flex-direction: column;
			text-align: center;
			justify-content: center;
			align-items: center;
	
		}
`;

const Column1 = styled.div`
		flex: 1;
		@media ${device.laptop} {
			flex: 1;
			margin: 24px;	
		}
	`;
const Column2 = styled.div`
		flex: 3;
		margin: 40px;	
		@media ${device.laptop} {
			flex: 1;
			margin: 24px;	
	
	
		}
	`;
const Footer = () => {



	return (
		<CustomContainer>
			<Container>

				<Content>
					<Column1>
						<Link to="/">
							<h4 >A.E HELIÖVAARA</h4>

						</Link>
						<p>Creative Technologist</p>
						<a
							aria-label="Aleksanteri Behance profile"
							target='_blank'
							rel="noreferrer"
							href="https://www.behance.net/aleksanterb9c4">
							<FontAwesomeIcon style={{ fontSize: '40px', color: 'white' }} icon={faBehance} />
						</a>
						<a
							aria-label="Aleksanteri LinkedIn profile"
							target='_blank'
							rel="noreferrer"
							href="https://www.linkedin.com/in/aleksanteri1/"
						>
							<FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '40px', color: 'white' }} icon={faLinkedin} />
						</a>
					</Column1>
					<div></div>
					<Column2 >

						<h5>2020 - 2024 © Code & Design by Aleksanteri Heliövaara</h5>

					</Column2>
				</Content>

			</Container>

		</CustomContainer>
	);
};


export default Footer;