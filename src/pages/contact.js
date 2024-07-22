import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';


const HeroText = styled.h1`
	color: ${props => props.theme.colors.black};	
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
    padding-left: 32px;
	padding-right: 32px;
	@media ${device.laptop} {
		flex-direction: column;
		padding-left: 0px;
		padding-right: 0px;

	}
`;

const Column = styled.div`
	position: absolute;		
	flex: 1;
	margin-right: 60px;
	@media ${device.laptop} {
		margin-right: 0px;
		position: relative;		

	}
`;

const ImageContainer = styled.img`
	object-fit: cover;
	margin-top: 80px;
	margin-right: -300px;
	max-width: 700px;

	@media ${device.laptop} {
		height: 200px;
		margin-top: 0px;
		width: 100%;
		margin-right: 0px;


	}
`;

const Content = styled.div`
	margin-top: 200px;
	padding: 50px;
	flex: 2;
	margin-left: 30%;
	background-color: white;
	z-index: 10000000;
	@media ${device.laptop} {
		flex: 1;
		margin-top: 0px;
		padding: 0px;
		margin-left: 0px;

	}
`;

const Markdown = styled.div`
	word-wrap: break-word;
	overflow-wrap: break-word;
	li {
		font-size: 24px;
		line-height: 40px;
	}
  	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	hyphens: auto;
	hyphens: auto;
	max-width: 900px;
	@media ${device.laptop} {
		margin-top: 30px;
		li {
			font-size: 16px;
			line-height: 24px;
		}
	}
`;



const Contact = ({ data }) => {
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
					<Column>
						<ImageContainer src={data.contentfulPage.image.file.url} />

					</Column>
					<Content>

						<Markdown
							dangerouslySetInnerHTML={{
								__html: data.contentfulPage.content.childMarkdownRemark.html,
							}}
						/>
						
					</Content>

				</Page>
			</Container>

		</Layout>
	);
};
export default Contact;

export const query = graphql`query ContactQuery {
	contentfulPage(contentful_id: {eq: "52Oaaqah9yunIQ9spofcI"}) {
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


