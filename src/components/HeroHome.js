import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';
import ReactPlayer from 'react-player/lazy';

const HeroStyled = styled.div`
	min-height: 100%;
	z-index: -1;
	background-position: center;
	// background-color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		height: 100%;
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
		justify-content: center;
		margin-top: 0px;
		width: 100%;
		margin-right: 0px;
	}	
	`;


const Title = styled.h1`

	font-weight: 400;
	
`;
const ImageContainer = styled.div`
	// margin: 1%;
	width: 100%;
	flex: 1;
	// margin-left: -300px;
	align-self: flex-end;
	z-index: 1;
	height: 500px;
	@media ${device.laptop} {
		height: 300px;
		flex: 1;
		width: 100%;
		margin: 0px;
		margin-left: 0px;



	}	
`;

const Image = styled.img`
border-radius: 8px;	
	height: 100%;
	object-fit: cover;
`;

const Ingress = styled.div`
	// background: rgba(255, 255, 255, 0.2);
    // color: black;
	text-align:center;
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


     }
`;

const ButtonUs = styled(Link)`
	 margin-left: auto;
	 margin-right: auto;
	margin-top: 40px;		
	height: 48px;
	border: 2px white solid;
	max-width: 300px;
	display: flex;
	flex-direction: row;
	padding-left: 20px;
	&:hover {
		cursor: pointer;
		background-color: #ffffff;
		border: 2px  #121212 solid;
		color: black;
	}
`;

const ButtonText = styled.p`
	margin: 0px !important;
	line-height: 48px;
`;

const ButtonIconContainer = styled.div`
	line-height: 48px;
	align-self: flex-end;
	margin-right: 40px;
	margin-left: auto;
`;

const ButtonIcon = styled(FontAwesomeIcon)`
	font-size: 18px;
`;


const BoldText = styled.span`
	font-weight: 600;
`;

// background video

const BackgroundVideoContainer = styled.div`
	border-radius: 8px;
	margin-top: 20px;
  	z-index: 111;
`;

const BackgroundVideo = styled(ReactPlayer)`
//   width: 100vw; /* Set the width to 100vw */
//   height: 100%; /* Set the height to 100% */
//   position: absolute;
//   object-fit: cover; /* Maintain aspect ratio */
//   left: 0;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1111;
  background: rgba(0, 0, 0, 0.8);
`;



const HeroHome = () => {
	return (
		<HeroStyled >

			{/* <BackgroundVideoContainer>
				<BackgroundVideo 	
					width='100%'
					// height='100%'
					loop={true} 
					
					playing={true}
					url="https://videos.ctfassets.net/uypuqbs1fp4y/ioZ3CgySMElUUj7nNrO4Q/0c0bbcd3609b1707ee1c0fee37352d31/background-movie.mp4" />
				<BackgroundOverlay />
			</BackgroundVideoContainer> */}
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
							{/* <Title ><span style={{ textDecoration: 'underline' }}>Creative Technology</span> and <span style={{ fontWeight: 400 }}>Design Agency</span></Title> */}
							<h5 style={{ fontWeight: 400 }}>Based in <BoldText>Helsinki Finland</BoldText>, we provide innovative and forward looking technology solutions and User Experience driven Digital Design.</h5>
							<ButtonUs data-sal="slide-up"
								data-sal-delay="300"
								data-sal-easing="ease" to='/about'>
								<ButtonText>Read more</ButtonText>
								<ButtonIconContainer>
									<ButtonIcon icon={faArrowRight} />
								</ButtonIconContainer>
							</ButtonUs>
						</Ingress>
					</TextContainer>

					{/* <ImageContainer data-sal="slide-left"
						data-sal-delay="100"
						data-sal-easing="ease">
						<Image src="/background.png"/>
					</ImageContainer> */}
				</HeroContent>
				<BackgroundVideoContainer>
					<BackgroundVideo
						width='100%'
						height='100%'
						loop={true}
						playsinline
						playing={true}
						url="https://videos.ctfassets.net/uypuqbs1fp4y/ioZ3CgySMElUUj7nNrO4Q/0c0bbcd3609b1707ee1c0fee37352d31/background-movie.mp4" />
				</BackgroundVideoContainer>

			</Container>


			{/* <Overlay themeColor="Brand" /> */}
		</HeroStyled>


	);
};



export default HeroHome;