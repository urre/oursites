const path = require('path')
exports.createPages = ({ boundActionCreators, graphql }) => {
	const { createPage } = boundActionCreators
	const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
	return graphql(`
		{
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
				edges {
					node {
						excerpt(pruneLength: 250)
						html
						id
						frontmatter {
							date
							path
							title
							url
							registrar
							expiration_date
							github_repo
							codeship_pid
							codeship_uuid
							css_size
							js_size
							page_speed_mobile
							page_speed_desktop
							description
						}
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			return Promise.reject(result.errors)
		}
		result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.frontmatter.path,
				component: blogPostTemplate,
				context: {}
			}) // additional data can be passed via context
		})
	})
}
