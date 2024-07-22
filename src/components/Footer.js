import React, { useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../device';
// import Markdown from '../Markdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'gatsby';

library.add(faBehance, faLinkedin);

const Footer = () => {

	const Container = styled.div`
		position: relative;
		z-index: 3;
		// background-color: ${props => props.theme.colors.black};
		height: 100%;
		margin-top: 150px;
		@media ${device.laptop} {
			margin-top: 0px;
	
		}
	
`;

	const Content = styled.div`
		max-width: 1500px;
		margin-left:auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		padding-top: 64px;
		padding-bottom: 64px;
		color: ${props => props.theme.colors.white};
		@media ${device.laptop} {
			flex-direction: column;
			text-align: center;
			justify-content: center;
			align-items: center;
	
		}
`;

	const Column1 = styled.div`
		flex: 1;
		margin: 40px;	
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



	useEffect(() => {
		// context.GetFooterContent("4g3oxVSEZ0pvZelnhxZVHL",`${context.lang}`)
		// eslint-disable-next-line
	}, [])

	return (
		<Container>
			{/* <ContactForm /> */}
			<Content>
				<Column1>
					<Link to="/">
						<h4 >A.E HELIÖVAARA</h4>

					</Link>
					<p>Creative Technologist</p>
					{/* <p>aleksanteri@helau.io</p> */}
					<Link to="https://www.behance.net/aleksanterb9c4">
						<FontAwesomeIcon style={{ fontSize: '40px', color: 'white' }} icon={faBehance} />
					</Link>
					<Link to="https://fi.linkedin.com/company/helau-solutions?trk=public_profile_experience-item_profile-section-card_subtitle-click">
						<FontAwesomeIcon style={{ fontSize: '40px', marginLeft: '40px', color: 'white' }} icon={faLinkedin} />
					</Link>
				</Column1>
				<div></div>
				<Column2 >
					{/* <h3 style={{ marginTop: '0px' }}>Helau Solutions</h3> */}
					{/* <h4>We are the rebels of digital design, the ones who dare to challenge the status quo and create something truly meaningful. We are on a mission to use technology and design to make a positive impact on the world. That&apos;s why we welcome all bold and curious companies to join us on this journey. Together, we&apos;ll create modern digital experiences that bring about a more open and connected world. Are you ready to join the rebellion?</h4> */}
					<h5>2020 - 2024 © Code by Aleksanteri Heliövaara</h5>

				</Column2>
			</Content>
		</Container>
	);
};


export default Footer;