import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout/Layout';
import Container from '../components/Container/Container';
import styled from 'styled-components';
import { device } from '../device';
import ContentBlock from '../components/ContentBlock/ContentBlock';
import Loader from '../components/Loader/Loader';
import { useEffect } from 'react';
import CardGrid from '../components/CardGrid/CardGrid';
import Pill from '../components/Pill/Pill';

const Hero = styled.div`
	display: flex;
	flex-direction: column;
	z-index: 30000000;
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 100px;
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
		margin-top: 100px;
	}
`;




const PillRow = styled.div`
	display: flex;
	max-width: 100%;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 20px;
	align-items: center;
	margin-top: 30px;
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
	position: relative;
	margin-left: auto; 
	margin-right: auto;
	z-index: 10000;
	object-fit: cover;
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

const Content = styled.div`
	width: 100vw;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 100px;
`;

const Ingress = styled.h2`
	font-size: 26px;
	margin: 10px 0px 10px 0px !important;
	line-height: 30px;
	font-weight: 400;
	letter-spacing: 0.01em;
	@media ${device.tablet} {
		font-size: 22.78px;
		line-height: 32px;
		margin-bottom: 0px;
	}
`;
const Article = ({ data }) => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	const SeoTitle = 'Article';
	const seoTitle = { title: data.contentfulArticle.title || SeoTitle };
	return (

		<Layout Layout
		>

			<SEO
				title={`Article: ${seoTitle.title}`}
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
							<h1>{data.contentfulArticle.title}</h1>
							<Ingress style={{ color: '#818181' }}>
								{data.contentfulArticle.leadingText}</Ingress>
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
								<HeroImage alt={data.contentfulArticle.title || 'article-image'} src={data.contentfulArticle.image.file.url} />
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
			<Content>
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
			</Content>
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
						tags
						clientName
						title
						leadingText
						image {
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
}`;

