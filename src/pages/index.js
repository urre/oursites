import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import SiteTable from '../components/SiteTable'

export default function Index({ data }) {
	const { edges: posts } = data.allMarkdownRemark

	return <SiteTable posts={posts} />
}

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 250)
					id
					frontmatter {
						title
						date(formatString: "YYYY-MM-DD")
						path
						url
						registrar
						expiration_date
						github_repo
						codeship_pid
						codeship_uuid
						page_speed_mobile
						page_speed_desktop
					}
				}
			}
		}
	}
`
