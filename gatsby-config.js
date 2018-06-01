module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`
	},
	plugins: [
		`gatsby-plugin-react-next`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {}
		}
	]
}
