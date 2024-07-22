const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allContentfulArticle {
				edges {
					node {
						slug
					}
				}
			}
			allContentfulAuthor{
				edges {
					node {
						slug
					}
				}
			}
		}	
  `);
	response.data.allContentfulArticle.edges.forEach(edge => {
		createPage({
			path: `/article/${edge.node.slug}`,
			component: path.resolve('./src/pages/article.js'),
			context: {
				slug: edge.node.slug,
			},
		});
	});
	response.data.allContentfulAuthor.edges.forEach(edge => {
		createPage({
			path: `/${edge.node.slug}`,
			component: path.resolve('./src/pages/teamMember.js'),
			context: {
				slug: edge.node.slug,
			},
		});
	});
};