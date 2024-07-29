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
    height: 120vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const HeroText = styled.p`
    font-weight: 400;
    font-size: 20px;
    position: relative; /* Make sure the element's position can be manipulated */

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
    font-size: 14px;
`;

const HeroContentCentered = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
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
		margin-top: 80px;

`;

const ScrollingText = styled.h1`
    font-size: 200px;
    font-weight: 400;
    animation: ${TextAnimation} 20s linear infinite;
    @media ${device.laptop} {
        font-size: 70px;
    }
`;

const RecentWork = styled.p`
    color: white;
`;

const ChangingText = styled.h1`
`;

const QuoteContainer = styled.div`
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
`;
const Quote = styled.h4`
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
		setOffsetY(window.pageYOffset);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const [text, setText] = useState('Welcome');
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	useEffect(() => {
		const texts = [
			'Tervetuloa',  // Finnish
			'Welcome',     // English
			'Bienvenido',  // Spanish
			'Bienvenue',   // French
			'Willkommen',  // German
			'Benvenuto',   // Italian
			'歡迎',        // Chinese (Traditional)
			'ようこそ',    // Japanese
			'환영합니다'    // Korean
		];

		const getRandomIndex = () => Math.floor(Math.random() * texts.length);

		if (sessionStorage.getItem('loaded')) {
			setText('Home');
		}
		else {
			const interval = setInterval(() => {
				setText(texts[getRandomIndex()]);
			}, 500);
			sessionStorage.setItem('loaded', true);
			return () => clearInterval(interval);
		}


	}, []);

	return (
		<Layout page="home" >
			<SEO
				title="Aleksanteri Heliövaara"
				description="Creative Technologist"
				image="/seo.jpeg"
				article={false}
			/>
			<Loader>
				<ChangingText style={{ color: 'black' }}>{text}</ChangingText>
			</Loader>
			<Hero
				data-sal="fade"
				data-sal-delay="100"
				data-sal-easing="ease"
				data-sal-duration="1000"
			>
				<Container>
					<HeroContentCentered style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
						<PersonImageContainer1 src='./aleksanteri.png' />
						<h1>Freelancer Developer & Designer</h1>
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
								<IconText>+358442360304</IconText>
							</InfoContainer>
						</Row>
					</HeroContentCentered>
				</Container>
				<ScrollingTextContainer style={{ transform: `translateY(${offsetY * 0.1}px)` }}>
					<ScrollingText>Aleksanteri Eliel Heliövaara - Aleksanteri Eliel Heliövaara</ScrollingText>
				</ScrollingTextContainer>
			</Hero>
			<Container>
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
