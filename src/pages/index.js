import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import SiteTable from '../components/SiteTable'

import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'

const columnData = [
	{ id: 'title', numeric: false, disablePadding: true, label: 'Site name' },
	{
		id: 'domain',
		numeric: false,
		disablePadding: false,
		label: 'Domain'
	},
	{
		id: 'registrar',
		numeric: false,
		disablePadding: false,
		label: 'Registrar'
	},
	{
		id: 'expiration_date',
		numeric: false,
		disablePadding: false,
		label: 'Domain expires'
	},
	{
		id: 'pagespeedmobile',
		numeric: true,
		disablePadding: false,
		label: 'Page Speed Mobile'
	}
]

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
						page_speed_mobile
					}
				}
			}
		}
	}
`
