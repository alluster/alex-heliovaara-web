
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'ALEKSANTERI HELIÖVAARA',
		titleTemplate: 'Aleksanteri Eliel Heliövaara',
		description: 'Based in Helsinki Finland',
		siteUrl: process.env.SITE_URL, // No trailing slash allowed!
		image: `${process.env.SITE_URL}/seo.jpeg`, // Path to your image you placed in the 'static' folder
		twitterUsername: '',
	},
	plugins: [
		{

			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST || 'cdn.contentful.com',
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-PKVSCXV',
				includeInDevelopment: false,

			},
		},
		'gatsby-plugin-styled-components',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		"gatsby-plugin-netlify",
		'gatsby-plugin-scroll-reveal',
		{
			resolve: 'gatsby-plugin-google-gtag',
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
				trackingIds: [
					'G-B20WRHEY1Y',
					'UA-200768462-1' // Google Analytics / GA
					//   "AW-CONVERSION_ID", // Google Ads / Adwords / AW
					//   "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
				]
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [{
					resolve: "gatsby-remark-external-links",
					options: {
						target: "_blank",
						rel: "noopener noreferrer"
					}
				}]
			}
		}, 'gatsby-plugin-mdx',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'Questrial\:400'

				],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaults: {
					formats: ['auto', 'webp'],
					placeholder: 'dominantColor',
					quality: 100,
					breakpoints: [750, 1080, 1366, 1920],
					backgroundColor: 'transparent',
					tracedSVGOptions: {},
					blurredOptions: {},
					jpgOptions: {},
					pngOptions: {},
					webpOptions: {},
					avifOptions: {},
				},
			},
		}, 'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},

			__key: 'pages',
		},
	],
};
