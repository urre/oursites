import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

import ToolBar from './Toolbar'
import SiteTableItem from './SiteTableItem'

class SiteTable extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const { posts } = this.props

		return (
			<section>
				<ToolBar amount={posts.length} />
				<ul className="oursites">
					<li className="oursites-item oursites-item-header">
						<span className="oursites-item-title">Name</span>
						<span className="oursites-item-url">URL</span>

						<span className="oursites-item-registrar">Registrar</span>
						<span className="oursites-item-expiration_date">Domain Expiration Date</span>
						<span className="oursites-item-page_speed">PSI Mobile/Desktop</span>
						<span className="oursites-item-codeship">Codeship build</span>
					</li>

					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
						return <SiteTableItem key={post.id} {...post} />
					})}
				</ul>
			</section>
		)
	}
}

export default SiteTable
