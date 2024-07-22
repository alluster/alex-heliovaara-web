import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import ContentBlock from '../components/ContentBlock';
import useScrollPosition from '../support-functions/useScrollPosition';


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
	// margin-top: 100px;
	// font-size: 70px;
	// line-height: 80px;
	// width: 600px;
	padding-top: 0px;
	padding-bottom: 0px;
	// color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 0px;
		// font-size: 40px;
		// line-height: 40px;
		width: 80%;
		margin-top: 0px;


	}
`;

const LeadingText = styled.h3`
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
		margin-top: 0px;

		width: 100%;	
		margin-bottom: 0px;


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
	padding-bottom: 50px;

	@media ${device.laptop} {
		flex: 1;
		margin-left: 0px;
		margin-top: 0px;
		padding: 0px;
		padding-bottom: 50px;

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
		font-size: 16px;
		line-height: 24px;
	}
	  a {
		text-decoration: none !important;
		all: unset;
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
const HeroTextContainer = styled.div`
	max-width: 1000px;
	display: flex;
	flex-direction: column;
	margin-left: auto;
	margin-right: auto;
	text-align: center;
	height: 100vh;
	align-items: center;
	justify-content: center;
	
`;


const BackgroundImage = styled.img`
	// margin-top: 100px;
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
	// @media ${device.laptop} {
	// 	height: 300px;
	// }	
`;



const Article = ({ data }) => {
	const scrollPosition = useScrollPosition();
	const heroHeight = 600; // Adjust this based on your Hero section's height
	return (
		<Layout
			changeBackground={scrollPosition > heroHeight}
			changeBackgroundColor={data.contentfulArticle.backgroundColor}
		>

			<SEO
				title={data.contentfulArticle.title}
				description={data.contentfulArticle.description.description}
				image={data.contentfulArticle.image.file.url}
				article={true}
			/>
			<Hero>
				<Container>
					{/* {data.contentfulArticle.clientName != undefined ? <HeroDescription> {
						data.contentfulArticle.description != undefined ?
							<Markdown
								dangerouslySetInnerHTML={{
									__html: data.contentfulArticle.description.childMarkdownRemark.html,
								}}
							/>: null
					} </HeroDescription> : null} */}
					<HeroTextContainer>
						<HeroText>{data.contentfulArticle.title}</HeroText>

						{data.contentfulArticle.clientName != undefined ? <p>Client:<span style={{ fontWeight: 'bold' }}> {data.contentfulArticle.clientName}</span> </p> : null}
						{data.contentfulArticle.clientName != undefined ? <p>Role:<span style={{ fontWeight: 'bold' }}> {data.contentfulArticle.professionalRole}</span> </p> : null}

						{/* {data.contentfulArticle.author != undefined ? <AuthorCard
						name={data.contentfulArticle.author.personName}
						description={data.contentfulArticle.author.personDesxription}
						image={data.contentfulArticle.author.personImage.file.url}
						email={data.contentfulArticle.author.personEmail}
						slug={data.contentfulArticle.author.slug}
					/> :null} */}

					</HeroTextContainer>


					<BackgroundImage src={data.contentfulArticle.image.file.url} />
					<LeadingText>{data.contentfulArticle.leadingText}</LeadingText>

				</Container>


			</Hero>
			<Container>

				<Page>
					{/* <Column>
						<ImageContainer src={data.contentfulArticle.image.file.url} />

					</Column> */}


				</Page>
				{
					data.contentfulArticle.contentBlock != undefined && data.contentfulArticle.contentBlock.length > 0 ?
						data.contentfulArticle.contentBlock.map((item, i) => {
							return (
								<ContentBlock
									key={i}
									title={item.title}
									content={item.content.childMarkdownRemark.html}
									images={item.images}
									video={item.video ? item.video.file.url : null}
								/>
							);
						})
						: null
				}
				<Content>
					{
						data.contentfulArticle.content != undefined ?
							<Markdown
								dangerouslySetInnerHTML={{
									__html: data.contentfulArticle.content.childMarkdownRemark.html,
								}}
							/> : null
					}




				</Content>

				<Divider />

				<Divider />
				{/* <CardGrid content={data.allContentfulArticle.edges} /> */}

			</Container>

		</Layout>
	);
};
export default Article;

export const query = graphql`query ($slug: String) {
	
    contentfulArticle(slug: { eq: $slug }) {
		id
		clientName
		professionalRole
		backgroundColor
		description{
			childMarkdownRemark {
				html
			}
		}
		contentBlock{
			title
			video {
				file {
					url
				}
			}
			images{
				file {
					url
					fileName
					contentType
				}
			}
			content{
				childMarkdownRemark {
					html
				}
			}
		
		}
		image {
			file {
				url
				fileName
				contentType
			}
		}
		
		title
		leadingText
		description {
			description
		}
		
		tags
		author {
			id
			personImage {
				file {
					url
				}
			}
			personEmail
			personDesxription
			personName
			slug
		}
		}
		allContentfulArticle
		(filter: {tags: {eq: "article"}})
			{
				edges {
					node {
						cardStyle
						backgroundColor
						id
						ingress
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
				personDesxription
				slug
				personImage {
					file {
						url
					}
				}
			}
}`;
