import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

const ToolBar = () => (
	<section className="toolbar">
		<div className="toolbar-left">
			<h2 className="toolbar-amount">
				Sites <span className="toolbar-amount-number">(5)</span>
			</h2>
		</div>
	</section>
)

class SiteTable extends React.Component {
	cleanURL(siteUrl) {
		const url = new URL(siteUrl)
		return url.hostname
	}

	render() {
		const { posts } = this.props

		return (
			<section>
				<ToolBar />
				<ul className="oursites">
					<li class="oursites-item oursites-item-header">
						<span className="oursites-item-title">Name</span>
						<span className="oursites-item-url">URL</span>

						<span className="oursites-item-registrar">Registrar</span>
						<span className="oursites-item-expiration_date">Domain Expiration Date</span>
						<span className="oursites-item-page_speed_mobile">Google Page Speed Mobile</span>
					</li>

					{posts.filter(post => post.node.frontmatter.title.length > 0).map(({ node: post }) => {
						return (
							<li class="oursites-item" key={post.id}>
								<span className="oursites-item-title">{post.frontmatter.title}</span>
								<span className="oursites-item-url">
									<a href={post.frontmatter.url}>{this.cleanURL(post.frontmatter.url)}</a>
								</span>

								<span className="oursites-item-registrar">{post.frontmatter.registrar}</span>
								<span className="oursites-item-expiration_date">{post.frontmatter.expiration_date}</span>
								<span className="oursites-item-page_speed_mobile">{post.frontmatter.page_speed_mobile}</span>
							</li>
						)
					})}
				</ul>
			</section>
		)
	}
}

export default SiteTable
