import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import CardGrid from '../components/CardGrid';
import ContentBlock from '../components/ContentBlock';
import HeroPortfolio from '../components/HeroPortfolio';
import AuthorCard from '../components/AuthorCard';

// form styles 

const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.linkGray};
	height: 42px;
	width: 100%;
	margin-top: 16px;
	margin-bottom: 32px;
	padding-left: 20px;
	font-size: 18px;
	border-radius: 4px;

	@media ${device.laptop} {
		padding-left: 0px;
	}
	
`;

const TextArea = styled.textarea`
	border: 1px solid ${props => props.theme.colors.linkGray};
	margin-top: 16px;
	margin-bottom: 32px;
	border-radius: 4px;
	width: 100%;
	padding-left: 20px;
	font-size: 24px;
	padding-top: 20px;
	@media ${device.laptop} {
		padding-left: 0px;
	}

`;






// form styles

const Hero = styled.div`
	position: relative;
	z-index: 3;
	width: 100%;
	height: 100%;
	border-bottom: .5px white solid;

	@media ${device.laptop} {
		height: 100%;
	}
`;

const HeroText = styled.h1`
// background: rgba(255, 255, 255, 0.9);
	margin-top: 50px;
	font-size: 70px;
	line-height: 80px;
	width: 600px;
	padding-top: 0px;
	padding-bottom: 0px;
	// color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 0px;
		font-size: 40px;
	line-height: 40px;
	width: 100%;

	}
`;

const LeadingText = styled.h4`
// background: rgba(255, 255, 255, 0.9);
	width: 800px;
	position: relative;
	z-index: 3;
	margin-top: 10px;
	margin-bottom: 30px;
	// color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 0px;
		padding-bottom: 0px;
		width: 100%;

	}
`;

const Page = styled.div`
	position: relative;
	z-index: 3;
	display: flex;
	flex-direction: row;
	margin-top: 60px;

	@media ${device.laptop} {
		flex-direction: column;

	}

`;

const Column = styled.div`
	position: relative;
	z-index: 3;
	flex: 1;
	margin-right: 32px;
	@media ${device.laptop} {
		margin-right: 0px;

	}
`;



const Content = styled.div`
	position: relative;
	z-index: 3;
	flex: 2;
	// background-color: white;
	margin-left: -80px;
	margin-top: 40px;
	padding: 60px;
	max-width: 600px;
	margin-left: auto;
	margin-right: auto;
	@media ${device.laptop} {
		flex: 1;
		margin-left: 0px;
		margin-top: 0px;
		padding: 0px;
	}
	
`;

const Divider = styled.div`
	height: 100px;
`;

const Markdown = styled.div`
	position: relative;
	z-index: 3;
	h3 {
		margin-bottom: 60px;
	}
	li {
		font-size: 24px;
		line-height: 40px;
	}

	@media ${device.laptop} {
		h3 {
			margin-bottom: 20px;
		}
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;





const Image = styled.img`
	height: 100%;
	object-fit: cover;
`;
const ImageContainer = styled.div`
	margin: 1%;
	width: 90%;
	flex: 2;
	margin-left: -300px;
	z-index: 1
	height: 1000px;
	@media ${device.laptop} {
		height: 300px;
		flex: 1;
		width: 100%;
		margin: 0px;
		margin-left: 0px;



	}	
`;
const BackgroundImage = styled.img`
	margin-top: 100px;
	margin-bottom: 100px;
	border: 0px solid white;
	border-radius: 20px;
	align-self: center;
	position: relative;
	margin-left: auto; 
	margin-right: auto;
	// top: 0px:
	// left: 0px;
	z-index: 1;
	object-fit: cover;
	width: 100%
	
`;

const AuthorCardContainer = styled(Container)`
width: 100%;
	display: flex;
	justify-content: center;	
	flex-direction: row;
	@media ${device.laptop} {
		justify-content: flex-start;
	}

`;

const teamMember = ({ data }) => {
	return (
		<Layout>
			<AuthorCardContainer>
				{data.contentfulAuthor != undefined ? <AuthorCard
					name={data.contentfulAuthor.personName}
					description={null}
					image={data.contentfulAuthor.personImage.file.url}
					email={null}
					slug={data.contentfulAuthor.slug}
				/> : null}
			</AuthorCardContainer>


			{/* <SEO
				title={data.contentfulArticle.title}
				description={data.contentfulArticle.description.description}
				image={data.contentfulArticle.image.file.url}
				article="true"
			/> */}
			<HeroPortfolio />

			<Container>


				<ContentBlock
					title='Aleksanteri Heliövaara'
					content='
					<ul>
					<li>aleksanteri@helau.io</li>
					<li>Born in Helsinki 1987</li>
						
					</ul>
					'
				/>
				<ContentBlock
					title='Tecnologies'
					content='
					<ul>
					<li>React.js, Node.js & Express.js</li>
						<li>SQL, MySQL, GraphQL</li>
						<li>Azure, MongoDB, Laravel Forge, Digital Ocean, Docker</li>
						<li>Auth0, Firebase, Keycloack</li>
						<li>Styled Components, and CSS frameworks</li>
						<li>Contentful, WordPress, Gatsby, Netlify</li>
						<li>Studying: Python, .NET, PHP, C#</li>
					</ul>
						
					'
				/>
				<ContentBlock
					title='Design Tools'
					content='
					<ul>
					<li>Figma, Sketch</li>
						<li>InVision, Zeplin, Abstract</li>
						<li>Adobe Illustrator, InDesign, AfterEffects & Photoshop</li>
						<li>Rhinoceros 3D, KeyShot</li>
						<li>Limited Unity proficiency</li>
					</ul>
						
					'
				/>
				<ContentBlock
					title='Awards & Mentions'
					content='
					<ul>
						<li>Ultrahack 2018 Winner</li>
						<li>Patent for Nokia</li>
						<li>K-rauta Hackathon 2015 Winner</li>
						<li>Suunto Design Course Winner 2013</li>
					</ul>
						
					'
					images={null}
				/>
				<ContentBlock
					title='Education'
					content='
					<ul>
						<li>Certified Scrum Master (Reaktor)</li>
						<li>SAFe Practitioner Certificate (OP) </li>
						<li>MA, International Design Business Management (Aalto University)</li>
						<li>BA, Industrial Design (Aalto University)</li>
						<li>Master of Management Science in Corporate Management (Double Degree, Tongji University)</li>
						<li>Open University studies: Python basics, Introduction to Economics</li>
					</ul>
						
					'
					images={null}
				/>
				<ContentBlock
					title='Work history'
					content='
					<ul>
						<li>Lead Developer, Tahto Group Oy</li>
						<li> Head of Innovations, Extreme Consulting</li>
						<li> UX & Service Designer, Siili Solutions</li>
					</ul>
					
					'
					images={null}
				/>

				<ContentBlock
					title='Clients'
					content='
					<p>World Health Organization, Helsinki City, Valmet Automotive, Neste, HERE,
					Reima,
					OP,
					Finlayson,
					Fazer,
					SSAB, Veikkaus,
					RAY, Huoneistokeskus, POP,
					Tahto Group,
					Collective Crunch,
					Abbvie,
					Chipsters,
					Liike-elämän ja johdon konsultit,
					Suppilog,
					Speechly
					</p>


					'
					images={null}
				/>
				<p>Projects:</p>
				<CardGrid content={data.allContentfulArticle.edges} />
				<h1 style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign: 'center' }}>Contact for inquiries: aleksanteri@helau.io</h1>

			</Container>

		</Layout>
	);
};
export default teamMember;

export const query = graphql`query MyQuery {
	allContentfulArticle
	(filter: {professional: {eq: "aleksanteri"}})
		{
			edges {
				node {
					cardStyle
					ingress
					id
					slug
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
			contentfulAuthor(contentful_id: {eq: "XTQ8ZZ7WYZR89yVvWcOT9"}) {
				personEmail
				personName
				slug
				personDesxription
				personImage {
					file {
						url
					}
				}
			}
		
	}`;