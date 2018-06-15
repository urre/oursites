import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

const ToolBar = props => (
	<section className="toolbar">
		<div className="toolbar-left">
			<h2 className="toolbar-amount">
				Sites <span className="toolbar-amount-number">({props.amount})</span>
			</h2>
		</div>
	</section>
)

class SiteTable extends React.Component {
	cleanURL(siteUrl) {
		const url = new URL(siteUrl)
		return url.hostname
	}

	psiInsightsLink(url, strategy) {
		const psiBase = `https://developers.google.com/speed/pagespeed/insights/`
		return encodeURIComponent(`${psiBase}${url}&tab=${strategy}`)
	}

	codeshipBadgeURL(uuid, branch) {
		const codeshipBase = 'https://app.codeship.com/projects/'
		return `${codeshipBase}${uuid}/status?branch=${branch}`
	}

	codeshipBuildUrl(pid) {
		const codeshipBase = 'https://app.codeship.com/projects/'
		return `${codeshipBase}${pid}`
	}

	renderCodeshipbadge = (pid, uuid) => {
		return (
			<span className="oursites-item-page_codeship">
				<a href={this.codeshipBuildUrl(pid)} />
				<img src={this.codeshipBadgeURL(uuid, 'dev')} alt="Badge" />
			</span>
		)
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
						return (
							<li className="oursites-item" key={post.id}>
								<span className="oursites-item-title">
									<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
								</span>

								<span className="oursites-item-url">
									<a href={post.frontmatter.url}>{this.cleanURL(post.frontmatter.url)}</a>
								</span>

								<span className="oursites-item-registrar">{post.frontmatter.registrar}</span>
								<span className="oursites-item-expiration_date">{post.frontmatter.expiration_date}</span>
								<span className="oursites-item-page_speed">
									{post.frontmatter.page_speed_mobile !== 'undefined' ? (
										<a href={this.psiInsightsLink(post.frontmatter.url, 'mobile')}>
											<span className="pill">{post.frontmatter.page_speed_mobile}</span>
										</a>
									) : (
										''
									)}

									{post.frontmatter.page_speed_desktop !== 'undefined' ? (
										<a href={this.psiInsightsLink(post.frontmatter.url, 'desktop')}>
											<span className="pill pill-desktop">{post.frontmatter.page_speed_desktop}</span>
										</a>
									) : (
										''
									)}
								</span>

								{post.frontmatter.codeship_pid
									? this.renderCodeshipbadge(post.frontmatter.codeship_pid, post.frontmatter.codeship_uuid)
									: ''}

								{post.frontmatter.github_repo !== 'undefined' ? (
									<img src="https://icon.now.sh/github" alt="" />
								) : (
									''
								)}

								<img src="https://icon.now.sh/slack" alt="" style={{ marginLeft: '1rem' }} />

								<span className="details">
									<p>{post.frontmatter.description}</p>
								</span>
							</li>
						)
					})}
				</ul>
			</section>
		)
	}
}

export default SiteTable
