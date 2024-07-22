import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HeroStyled = styled.div`
	min-height: 100%;
	z-index: -1;
	background-position: center;
	// background-color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		height: 100%;
		
		margin-bottom: 50px;
    }

`;

const HeroContent = styled.div`
	// padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: row;
	position: relative;
	z-index: 999;
	justify-content: center;
	
	height: 100%;
	@media ${device.laptop} {
		max-width: 100%;
		padding-top: 0px;
		padding-bottom: 0px;
		flex-direction: column-reverse;
    }
`;


const TextContainer = styled.div`
	height: 100%;
	// background: rgba(255, 255, 255, 0.2);
	display: flex;
	margin-right: 1%;
	margin-top: 0px;
	z-index: 2;
	flex: 3;
	justify-content: center;
	text-align: left;
	flex-direction: column;
	line-break: normal;
	width: 50%;
	max-width: 730px;
	// color: white;
	@media ${device.laptop} {

		flex: 1;
		margin-top: 0px;
		width: 100%;
		margin-right: 0px;
	}	
	`;


const Title = styled.h1`
text-align: center;

	font-weight: 600;
	@media ${device.laptop} {
		text-align: left;

	}	
`;

const Ingress = styled.div`
	// background: rgba(255, 255, 255, 0.2);
    // color: black;
	text-align: center;

    font-weight: 300 !important;
	letter-spacing: 0.6px;
	margin-top: 25px;
	padding-right: 30px;
	margin-bottom: 30px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 0px;
		margin-bottom: 0px;
		padding-right: 0px;
		text-align: left;
	}
`;

const BoldText = styled.span`
	font-weight: 600;
`;

const Quote = styled.h4`
	font-style: italic;

`;
const Icons = styled.div`
	 display: flex;
	 flex-direction: row;
	 margin-left: auto;
	 margin-right: auto;
	 @media ${device.laptop} {
		margin-top: 30px;
        margin-left: 0px;


     }
`;


const HeroPortfolio = () => {
	return (
		<HeroStyled >
			<Container>

				<HeroContent>

					<TextContainer>
						{/* <Title> */}
						{/* <Typewriter
								options={{
									strings: ['React.js', 'UX Design', 'Contentful', 'Wordpress', 'SQL', 'React Native', 'UI Design', 'Service Design', 'Python', 'Gatsby.js' ],
									autoStart: true,
									loop: true,
								}}
							/> */}
						{/* </Title> */}
						<Ingress>
							<Title>Product Designer & Developer</Title>
							<h5 style={{ fontWeight: 400 }}><BoldText>10 years of experience </BoldText>in Tech Business has grown Aleksanteri into a forward looking <BoldText>Developer</BoldText>. Formally educated Agile  <BoldText>Full Stack Developer</BoldText> and a seasoned <BoldText>UX and UI Designer </BoldText>with formal education in Service Design - Aleksanteri is capable of joining digital projects from many angles. </h5>
							<Quote>`{'Yeah, sounds like a lot but thats what you get working hard for a decade.'}`</Quote>
						</Ingress>
						<Icons>
							<Link to="https://github.com/alluster">
								<FontAwesomeIcon style={{ fontSize: '30px' }} icon={faGithub} />
							</Link>
							<Link to="https://www.behance.net/aleksanterb9c4">
								<FontAwesomeIcon style={{ fontSize: '30px', marginLeft: '40px' }} icon={faBehance} />
							</Link>
							<Link to="https://www.linkedin.com/in/aleksanteri1/">
								<FontAwesomeIcon style={{ fontSize: '30px', marginLeft: '40px' }} icon={faLinkedin} />
							</Link>

						</Icons>

					</TextContainer>
					{/* <ImageContainer data-sal="slide-left"
						data-sal-delay="100"
						data-sal-easing="ease">
						<Image src="/allu.jpg"/>
					</ImageContainer> */}
				</HeroContent>
			</Container>


			{/* <Overlay themeColor="Brand" /> */}
		</HeroStyled>


	);
};



export default HeroPortfolio;