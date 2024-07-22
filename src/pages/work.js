import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Container from '../components/Container';
import SEO from '../components/seo';
import CardGrid from '../components/CardGrid';



const Work = ({ data }) => {
	return (
		<Layout >
			<SEO title="Hello" description="World" image="/seo.jpeg" article="true"/>
			<Container>
				<CardGrid content={data.allContentfulArticle.edges} />
			</Container>

		</Layout>
	);
};

export default Work;

export const query = graphql`query WorkQuery {
	allContentfulArticle
	(filter: {tags: {eq: "work"}})
	{
		edges {
			node {
				id
				slug
				title
				leadingText
				image {
					file {
						url
						}
					}
				}
			}
		}
		
	}`;