import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import { useEffect } from 'react';

const HeroText = styled.h1`
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 0px;
	}
`;

const Page = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
	padding-top: 200px;
    padding-left: 32px;
	padding-right: 32px;
	@media ${device.tablet} {
		flex-direction: column;
		padding-left: 0px;
		padding-right: 0px;
		padding-top: 100px;
	}
`;

const ImageColumn = styled.div`
	flex: 1;
	width: 100%;
	@media ${device.laptop} {
		margin-right: 0px;
		position: relative;		
		width: 100%;
	}
`;

const ContentColumn = styled.div`
	flex: 3;
	max-width: 700px;
	z-index: 10000000;
	margin-left: 30px;
	background-color: white;
	margin-left: -100px;
	padding: 30px;
	margin-top: 100px;
	@media ${device.tablet} {
		flex: 1;
		margin-top: 0px;
		padding: 0px;
		margin-left: 0px;
	}
`;

const ImageContainer = styled.img`
	position: relative;
	z-index: 1;
	object-fit: cover;
	@media ${device.tablet} {
		height: 300px;
		width: 100%;
		margin-top: 0px;
		margin-right: 0px;
	}
`;

const Markdown = styled.div`
	a {
		color: blue;
	}
	li {
		font-size: 24px;
		line-height: 40px;
	}
	max-width: 900px;
	@media ${device.laptop} {
		margin-top: 30px;
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;

const About = ({ data }) => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	}, []);
	return (
		<Layout>
			<SEO
				title={data.contentfulPage.title}
				description={data.contentfulPage.description}
				image={data.contentfulPage.image.file.url}
				article="true"
			/>

			<Container>

				<Page>
					<ImageColumn>
						<ImageContainer alt={data.contentfulPage.title} src={data.contentfulPage.image.file.url} />
					</ImageColumn>
					<ContentColumn>
						<HeroText >{data.contentfulPage.title}</HeroText>
						<p>{data.contentfulPage.leadingText}</p>
						<p>{data.contentfulPage.description}</p>
						<Markdown
							dangerouslySetInnerHTML={{
								__html: data.contentfulPage.content.childMarkdownRemark.html,
							}}
						/>
					</ContentColumn>
				</Page>
			</Container>
		</Layout>
	);
};
export default About;

export const query = graphql`query AboutQuery {
	contentfulPage(contentful_id: {eq: "3FCoahurtrxtJrs4Wzbrn9"}) {
	  image {
		file {
		  url
		}
		description
	  }
	  slug
	  title
	  leadingText
	  content {
		childMarkdownRemark {
			html
			}
	  }
	}
  }
  `;


