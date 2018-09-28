import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

import ToolBar from './Toolbar'
import SiteTableItem from './SiteTableItem'

class SiteTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
	}

	componentWillMount() {
		this.setState({
			data: this.props
		})
	}

	render() {
		const { posts } = this.state.data

		return (
			<section>
				<ToolBar amount={posts.length} />
				<div className="oursiteContainer">
					<table className="oursites">
						<thead className="oursites-item oursites-item-header">
							<tr>
								<th className="oursites-item-title">Name</th>
								<th className="oursites-item-url">URL</th>

								<th className="oursites-item-registrar">Registrar</th>
								<th className="oursites-item-expiration_date">Domain Expiration Date</th>
								<th className="oursites-item-page_speed">PageSpeedIndex Mobile/Desktop</th>
								<th className="oursites-item-codeship">CSS Size</th>
								<th className="oursites-item-codeship">JS Size</th>
							</tr>
						</thead>
						<tbody>
							{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
								return <SiteTableItem key={post.id} {...post} />
							})}
						</tbody>
					</table>
				</div>
			</section>
		)
	}
}

export default SiteTable
