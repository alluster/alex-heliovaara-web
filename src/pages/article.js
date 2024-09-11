import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import ContentBlock from '../components/ContentBlock';
import useScrollPosition from '../support-functions/useScrollPosition';
import Loader from '../components/Loader';
import { useEffect } from 'react';
import CardGrid from '../components/CardGrid';
import Pill from '../components/Pill';


const Hero = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 30000000;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
	min-height: 100vh;
	justify-content: center;
	@media ${device.laptop} {
		height: 100%;
	}
`;
const HeroTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: auto;
	margin-right: auto;
	// text-align: center;
	height: 100%;
	max-width: 100%;
	align-items: center;
	justify-content: center;
	@media ${device.laptop} {
		flex-direction: column;
		align-items: start;
		text-align: left;
		justify-content: start;
		margin-top: 50px;
		

	}
	
`;
const HeroText = styled.h2`	
	font-size: 30px;
	line-height: 30px;
	@media ${device.laptop} {
		padding-bottom: 0px;
			margin-bottom: 40px;

		font-size: 50px;
		line-height: 50px;
		margin-top: 100px;
	}
`;

const LeadingText = styled.h3`
font-size: 23px;
line-height: 23px;
	// width: 800px;
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
	// justify-content: center;
	align-items: center;
	@media ${device.laptop} {
		margin-top: 20px;
		gap: 10px;
		justify-content: start;
		margin-bottom: 50px;


    }
`;

const HeroImageContainer = styled.div`
	padding-right: 32px;
	padding-left: 32px;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 100px;
	max-width: 1200px;
	@media ${device.laptop} {
		padding-right: 16px;
		padding-left: 16px;
		margin-bottom: 60px;
    }
`;
const HeroImage = styled.img`
	// border-radius: 20px;
	position: relative;
	margin-left: auto; 
	margin-right: auto;
	z-index: 10000;
	object-fit: cover;
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




const InfoRow = styled.div`
	display: flex;
    flex-direction: row;
	gap: 40px;
    justify-content: space-between;
	align-items: start;
	margin-top: 40px;
	width: 100%;
	height: 100%;
    @media ${device.laptop} {
        flex-direction: column;
        align-items: start;
		margin-bottom: 30px;
		gap: 10px;
    }
`;

const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	align-items: start;
	justify-content: start;
	width: 100%;
	height: 100%;
`;

const InfoTitle = styled.p`
	text-transform: uppercase;
	margin-bottom: 10px;
	font-size: 14px;

`;
const InfoDivider = styled.div`
	width: 100%;
	border-bottom: 0.5px solid #E8E8E7;
`;
const InfoText = styled.p`
	margin-top: 20px;
	font-size: 20px;
`;


const ColorLayer = styled.div`
  position: relative;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  width: 200vw;
  min-height: calc(100% + 50vh);
  justify-content: center;
  align-items: center;
  transform: translateX(-25%);
  border-bottom-left-radius: 100% 50vw;
  border-bottom-right-radius: 100% 50vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.backgroundColor || 'transparent'};
    ${props => props.backgroundColor && `
      filter: brightness(0.8); /* Darkens the background color by 20% */
    `}
    // border-bottom-left-radius: 100% 50vw;
    // border-bottom-right-radius: 100% 50vw;
    z-index: -1; /* Ensure the pseudo-element is behind the content */
  }
`;

const ColorLayerContent = styled.div`
	width: 100vw;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 100px;


`;

const Article = ({ data }) => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	const scrollPosition = useScrollPosition();
	const heroHeight = 600; // Adjust this based on your Hero section's height
	return (
		<Layout
			changeBackground={scrollPosition > heroHeight}
		// changeBackgroundColor={data.contentfulArticle.backgroundColor}
		>

			<SEO
				title={data.contentfulArticle.title}
				description={data.contentfulArticle.description.description}
				image={data.contentfulArticle.image.file.url}
				article={true}
			/>
			<Loader >
				<h5 style={{ color: 'black' }}>{data.contentfulArticle.title}</h5>
			</Loader>
			<Container>

				<Hero>
					<HeroTextContainer>
						<div>
							<HeroText>{data.contentfulArticle.title}</HeroText>
							<LeadingText>{data.contentfulArticle.leadingText}</LeadingText>
							<PillRow>
								{
									data.contentfulArticle.services ? data.contentfulArticle.services.map((item, i) => {
										return (
											<Pill key={i} title={item} />
										);
									})
										:
										null
								}
							</PillRow>
						</div>
						<div>
							<HeroImageContainer>
								<HeroImage src={data.contentfulArticle.image.file.url} />
							</HeroImageContainer>

						</div>


					</HeroTextContainer>
					<InfoRow>
						<InfoContainer>
							<InfoTitle>
								Client
							</InfoTitle>
							<InfoDivider />
							<InfoText>
								{data.contentfulArticle.clientName}

							</InfoText>
						</InfoContainer>
						<InfoContainer>
							<InfoTitle>
								Role / service
							</InfoTitle>
							<InfoDivider />
							<InfoText>
								{data.contentfulArticle.professionalRole}

							</InfoText>
						</InfoContainer>
						<InfoContainer>
							<InfoTitle>
								Location / Year
							</InfoTitle>
							<InfoDivider />
							<InfoText>
								@{data.contentfulArticle.location} {data.contentfulArticle.year}


							</InfoText>
						</InfoContainer>
					</InfoRow>
				</Hero>
			</Container>


			<ColorLayer
			// backgroundColor={data.contentfulArticle.backgroundColor}
			>
				<ColorLayerContent>
					{
						data.contentfulArticle.contentBlock != undefined && data.contentfulArticle.contentBlock.length > 0 ?
							data.contentfulArticle.contentBlock.map((item, i) => {
								return (
									<ContentBlock
										key={i}
										backgroundColor={item.backgroundColor}
										title={item.title}
										content={item.content.childMarkdownRemark.html}
										images={item.images}
										video={item.video ? item.video.file.url : null}
									/>
								);
							})
							: null
					}


				</ColorLayerContent>


			</ColorLayer>
			<Container>
				<CardGrid content={data.allContentfulArticle.edges} />
			</Container>


		</Layout >
	);
};
export default Article;

export const query = graphql`query ($slug: String) {
	
    contentfulArticle(slug: { eq: $slug }) {
		id
		clientName
		professionalRole
		backgroundColor
		services
		year
		location
		description{
			childMarkdownRemark {
				html
			}
		}
		contentBlock{
			title
			backgroundColor
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
	    allContentfulArticle(filter: { tags: { eq: "work" } }) 
			{
				edges {
					node {
						orderNumber
						cardStyle
						backgroundColor
						professionalRole
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

