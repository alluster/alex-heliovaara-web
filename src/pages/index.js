import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import styled, { keyframes } from 'styled-components';
import SEO from '../components/seo';
import CardGrid from '../components/CardGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { device } from '../device';
import Loader from '../components/Loader';

const TextAnimation = keyframes`
    100% { transform: translateX(100%); }
    0% { transform: translateX(-100%); }
`;

const Hero = styled.div`
    position: relative;
    z-index: 1000;
    width: 100%;
    display: flex;
	min-height: 30vh;
    align-items: center;
    flex-direction: column;
    justify-content: start;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
	@media ${device.laptop} {
        margin-top: 80px;
    }
`;

const HeroContent = styled.div`
	margin-top: 100px;
    display: flex;
    flex-direction: column;
	height: 100%;
	@media ${device.laptop} {
		margin-top: 60px;
    }
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: start;
	gap: 40px;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: start;
			gap: 0px;

    }
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media ${device.laptop} {
        // height: 10px;
    }
`;

const IconIcon = styled(FontAwesomeIcon)`
    margin-right: 16px;
    font-size: 12px;
`;

const IconText = styled.p`
    font-size: 16px;
`;

const GreenBall = styled.div`
    background-color: #00FF85;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    margin-right: 16px;
`;

const ScrollingTextContainer = styled.div`
    width: 100vw;
    overflow: hidden;
    white-space: nowrap;
    box-sizing: border-box;
    position: relative;
	height: 100%;
	z-index: 100;
	@media ${device.laptop} {
		margin-top: 0px;
    }
`;

const ScrollingText = styled.h1`
    font-size: 200px;
	line-height: 200px;
    font-weight: 400;
	opacity: 0.3;
	color: ${props => props.theme.colors.darkGray};

    animation: ${TextAnimation} 20s linear infinite;
    @media ${device.laptop} {
		opacity: 0.1;
		color: ${props => props.theme.colors.darkGray};
    }
`;

const RecentWork = styled.p`
    color: white;
`;

const PersonImageContainer1 = styled.img`
	align-self: start;
	height: 100px;
	width: 100px;
	border-radius: 50%;
	background-repeat: no-repeat;
	object-fit: cover;
	margin-right: 32px;
	min-width: 100px;
	display: none;
	@media ${device.laptop} {
			display: flex;
		}
	`;

const PersonImageContainer2 = styled.img`
	align-self: start;
	height: 130px;
	margin-top: 16px;
	width: 130px;
	border-radius: 50%;
	background-repeat: no-repeat;
	object-fit: cover;
	margin-right: 32px;
	display: flex;
	@media ${device.laptop} {
			display: none;
		}

`;
const IndexPage = ({ data }) => {
	const [offsetY, setOffsetY] = useState(0);

	const handleScroll = () => {
		setOffsetY(window.scrollY);
	};


	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// const [text, setText] = useState('Welcome');
	// const [loader, setLoader] = useState(false);

	// useEffect(() => {
	// 	const load = sessionStorage.getItem('loader');
	// 	if (load) { setLoader(true); }
	// 	console.log(sessionStorage.getItem('loader'));
	// }, []);

	// useEffect(() => {
	// 	window.scroll({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	});
	// }, []);
	// useEffect(() => {
	// 	const texts = [
	// 		'Tervetuloa',  // Finnish
	// 		'Welcome',     // English
	// 		'Bienvenido',  // Spanish
	// 		'Bienvenue',   // French
	// 		'Willkommen',  // German
	// 		'Benvenuto',   // Italian
	// 		'歡迎',        // Chinese (Traditional)
	// 		'ようこそ',    // Japanese
	// 		'환영합니다'    // Korean
	// 	];

	// 	const getRandomIndex = () => Math.floor(Math.random() * texts.length);

	// 	if (loader === true) {
	// 		setText('Home');
	// 	}
	// 	else {
	// 		const interval = setInterval(() => {
	// 			setText(texts[getRandomIndex()]);
	// 		}, 500);
	// 		sessionStorage.setItem('loaded', true);
	// 		return () => clearInterval(interval);
	// 	}


	// }, []);
	const LeadingText = styled.h5`
		width: 800px;
		position: relative;
		z-index: 3;
		max-width: 100%;
		margin-top: 10px;
		margin-bottom: 30px;
		@media ${device.laptop} {
			padding-top: 0px;
			padding-bottom: 0px;
			margin-top: 0px;
			width: 100%;	
			margin-bottom: 0px;
	}
`;

	const PillRow = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 20px;
	justify-content: start;
	align-items: center;
	margin-bottom: 80px;
	@media ${device.laptop} {
		margin-bottom: 40px;
		margin-top: 20px;
		gap: 10px;
		justify-content: start;

    }
`;
	const servicesTags = [
		{ id: 1, title: 'AI Interface Design' },
		{ id: 1, title: 'AI Interface Development' },
		{ id: 1, title: 'Custom AI Provisioning to Azure' },

		{ id: 2, title: 'Mobile App Design' },
		{ id: 3, title: 'Mobile App Development' },
		{ id: 4, title: 'Concept Design' },
		{ id: 5, title: 'Web Design' },
		{ id: 6, title: 'Web Development' },
		{ id: 7, title: 'SaaS Development' },
		{ id: 8, title: 'UX Design' },
		{ id: 9, title: 'Service Design' },
		{ id: 10, title: 'Software Architecture' },
		{ id: 11, title: 'Agile Coaching' },
		{ id: 12, title: 'Responsive Design' }
	];
	return (
		<Layout page="home" >
			<SEO
				title="Aleksanteri Heliövaara"
				description="Creative Technologist"
				image="/seo.jpeg"
				article={false}
			/>
			<Loader>
				<h5 style={{ color: 'black' }}>Welcome</h5>

				{/* <ChangingText style={{ color: 'black' }}>{text}</ChangingText> */}
			</Loader>
			{/* <MovingBackground /> */}

			<Hero

			>
				<Container>

					<HeroContent >
						<h1>Product Designer & Developer</h1>
						<h3 >
							Hi, I'm Aleksanteri - a Creative Technologist with a passion in digital
							product design and development, based in Helsinki
							Finland. I have worked with WHO, Helsinki City, SSAB, Valmet Automotive and more...
						</h3>


						<Row>
							<InfoContainer>
								<GreenBall

								/>
								<IconText>Available for project</IconText>
							</InfoContainer>
							<InfoContainer>
								<IconIcon icon={faMapMarkerAlt} />
								<IconText>Current location: @Helsinki Finland </IconText>
							</InfoContainer>
							<InfoContainer>
								<IconIcon icon={faPhone} />
								<a href="tel:+358442360304"><IconText >+358442360304</IconText></a>
							</InfoContainer>
						</Row>
						{/* <Row>
						<IconText>My AI SaaS product Hyperfigures has been launched on Product Hunt platform. Please have a look and support my product.</IconText>
						<a href="https://www.producthunt.com/posts/hyperfigures?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hyperfigures" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=475586&theme=light" alt="Hyperfigures - AI&#0045;Driven&#0032;Data&#0032;Analysis&#0032;for&#0032;Managers&#0032;and&#0032;Leaders | Product Hunt" style={{ width: '250px', height: '54px' }} /></a>

					</Row> */}


					</HeroContent>
				</Container>

			</Hero>
			{/* <ScrollingTextContainer style={{ transform: `translateY(${offsetY * 0.5}px)` }}> */}

			{/* <ScrollingTextContainer >
				<ScrollingText>Aleksanteri Eliel Heliövaara - Aleksanteri Eliel Heliövaara</ScrollingText>
			</ScrollingTextContainer> */}
			<Container>


				<CardGrid content={data.allContentfulArticle.edges} />

			</Container>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulArticle(filter: { tags: { eq: "work" } }) {
		edges {
			node {
				orderNumber
				cardStyle
				id
				slug
				professionalRole
				ingress
				author {
					personEmail
					personName
					personImage {
						file {
							url
						}
					}
				}
				tags
				clientName
				title
				leadingText
				image {
					file {
						url
					}
				}
				companyLogo {
					file {
						url
					}
				}
				cardImage {
					file {
						url
					}
				}
			}
			}
		}
		
	}
`;
