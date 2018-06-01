import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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

class SiteTable extends React.Component {
	createSortHandler = property => event => {
		this.props.onRequestSort(event, property)
	}

	render() {
		const { onSelectAllClick, order, orderBy, numSelected, rowCount, posts } = this.props

		return (
			<Table className="sprintsites-table">
				<TableHead>
					<TableRow>
						{columnData.map(column => {
							return (
								<TableCell key={column.id} sortDirection={orderBy === column.id ? order : false}>
									<TableSortLabel>{column.label}</TableSortLabel>
								</TableCell>
							)
						}, this)}
					</TableRow>
				</TableHead>
				<TableBody>
					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
						return (
							<TableRow key={post.id}>
								<TableCell>{post.frontmatter.title}</TableCell>
								<TableCell>
									<a href={post.frontmatter.url}>{post.frontmatter.url}</a>
								</TableCell>
								<TableCell>{post.frontmatter.registrar}</TableCell>
								<TableCell>{post.frontmatter.expiration_date}</TableCell>
								<TableCell>{post.frontmatter.page_speed_mobile}</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		)
	}
}

export default SiteTable
