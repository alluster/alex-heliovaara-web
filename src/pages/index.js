import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Container from '../components/Container';
import styled, { keyframes } from 'styled-components';
import SEO from '../components/seo';
import CardGrid from '../components/CardGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { device } from '../device';
import Loader from '../components/Loader';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const TextAnimation = keyframes`
    100% { transform: translateX(100%); }
    0% { transform: translateX(-100%); }
`;

const Hero = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    display: flex;
	min-height: 60vh;
    align-items: center;
    flex-direction: column;
    justify-content: center;
	@media ${device.laptop} {
        margin-top: 80px;
    }
`;
const HeroContent = styled(Container)`
	margin-top: 100px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
	height: 100%;
	@media ${device.laptop} {
		margin-top: 60px;
    }
`;

const HeroTitle = styled.h1`
    margin-top: 30px;

`;

const HeroText = styled.p`
    font-weight: 400;
    font-size: 20px;
    position: relative; 

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

const QuoteRow = styled.div`
	display: flex;
	flex-direction: row;
	// align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	 @media ${device.laptop} {
		flex-direction: column;

    }
`;

const QuoteContainer = styled.div`
	height: 100%;
	position: relative;
	z-index: 1000000000;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	border-top: 0.5px solid white;
	padding-top: 40px;
	padding-bottom: 40px;
	margin-bottom: 40px;
	
`;
const QuotePerson = styled.p`
	justify-self: end;
`;
const Quote = styled.h5`
	letter-spacing: 1.3px;
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
	height: 100px;
	margin-top: 30px;
	width: 100px;
	border-radius: 50%;
	background-repeat: no-repeat;
	object-fit: cover;
	margin-right: 32px;
	min-width: 100px;
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
			<Hero
				data-sal="fade"
				data-sal-delay="100"
				data-sal-easing="ease"
				data-sal-duration="1000"
			>
				<HeroContent style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
					<PersonImageContainer1 src='./aleksanteri.png' />
					<HeroTitle>Freelancer Developer & Designer</HeroTitle>
					<Row>
						<PersonImageContainer2 src='./aleksanteri.png' />
						<HeroText >
							Aleksanteri Eliel Heliövaara is an award-winning, tech-forward,
							culture-driven, Creative Technologist and Freelance Developer & Designer with a background in digital
							product, branding and entrepreneurship, based in Helsinki
							Finland. Worked with WHO, Helsinki City, Osuuspankki, Fazer, SSAB
						</HeroText>
					</Row>

					<Row>
						<InfoContainer>
							<GreenBall
								data-sal="fade"
								data-sal-delay="1000"
								data-sal-easing="ease"
								data-sal-duration="2000"
							/>
							<IconText>Available for projects</IconText>
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
					<Row>
						<IconText>My AI SaaS product Hyperfigures has been launched on Product Hunt platform. Please have a look and support my product.</IconText>
						<a href="https://www.producthunt.com/posts/hyperfigures?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hyperfigures" target="_blank" rel="noreferrer"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=475586&theme=light" alt="Hyperfigures - AI&#0045;Driven&#0032;Data&#0032;Analysis&#0032;for&#0032;Managers&#0032;and&#0032;Leaders | Product Hunt" style={{ width: '250px', height: '54px' }} /></a>

					</Row>
				</HeroContent>

			</Hero>
			<ScrollingTextContainer style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
				<ScrollingText>Aleksanteri Eliel Heliövaara - Aleksanteri Eliel Heliövaara</ScrollingText>
			</ScrollingTextContainer>
			<Container>
				<QuoteRow>
					<QuoteContainer data-sal="fade"
						data-sal-delay="100"
						data-sal-easing="ease"
						data-sal-duration="1000">
						<Quote>
							...Aleksanteri's professionalism, intelligence, and passion for his work became very clear over the more than 2 years of daily collaboration, and he made the entire team better...
						</Quote>
						<QuotePerson>
							- Tuukka Miettinen, Tahto Group Oy
						</QuotePerson>
						<Link target='_blank' to="https://www.linkedin.com/in/aleksanteri1/">
							Read more in LinkedIn
							<FontAwesomeIcon style={{ fontSize: '20px', marginLeft: '10px', color: 'white' }} icon={faLinkedin} />
						</Link>

					</QuoteContainer>
					<QuoteContainer data-sal="fade"
						data-sal-delay="100"
						data-sal-easing="ease"
						data-sal-duration="1000">
						<Quote>
							...the WHO experienced an enormous increase in traffic to their site – 1.4 billion unique visitors in 2020...
						</Quote>

						<QuotePerson>
							- Progress Sitefinity
						</QuotePerson>
						<Link target='_blank' to="https://www.progress.com/sitefinity-cms/user-awards/associations---non-profit-and-most-impactful-digital-experience-2021">
							<p style={{ textDecoration: 'underline' }}>Read more in www.progress.com</p>
							{/* <FontAwesomeIcon style={{ fontSize: '20px', marginLeft: '10px', color: 'white' }} icon={faLinkedin} /> */}
						</Link>
						<Link to="/article/who-international-website-design/">
							<p style={{ textDecoration: 'underline' }}>View Project</p>
							{/* <FontAwesomeIcon style={{ fontSize: '20px', marginLeft: '10px', color: 'white' }} icon={faLinkedin} /> */}
						</Link>

					</QuoteContainer>
				</QuoteRow>

				<RecentWork data-sal="fade"
					data-sal-delay="100"
					data-sal-easing="ease"
					data-sal-duration="1000">Recent Work</RecentWork>
				<CardGrid data-sal="fade"
					data-sal-delay="100"
					data-sal-easing="ease"
					data-sal-duration="1000" content={data.allContentfulArticle.edges} />
			</Container>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allContentfulArticle(filter: { professional: { eq: "aleksanteri" } }) {
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
		contentfulAuthor(contentful_id: { eq: "XTQ8ZZ7WYZR89yVvWcOT9" }) {
			personEmail
			slug
			personName
			personDesxription
			personImage {
				file {
					url
				}
			}
		}
	}
`;
