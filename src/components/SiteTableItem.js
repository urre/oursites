import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

class SiteTableItem extends React.Component {
	constructor(props) {
		super(props)
		this.toggleClass = this.toggleClass.bind(this)
		this.state = {
			active: false
		}
	}

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

	toggleClass() {
		const currentState = this.state.active
		this.setState({ active: !currentState })
	}

	render() {
		const info = this.props
		return (
			<li className={`oursites-item ${this.state.active ? 'active' : null}`}>
				<span className="oursites-item-title">
					<Link to={info.frontmatter.path}>{info.frontmatter.title}</Link>
				</span>
				<span className="oursites-item-url">
					<a href={info.frontmatter.url}>{this.cleanURL(info.frontmatter.url)}</a>
				</span>
				<span className="oursites-item-registrar">{info.frontmatter.registrar}</span>
				<span className="oursites-item-expiration_date">{info.frontmatter.expiration_date}</span>
				<span className="oursites-item-page_speed">
					{info.frontmatter.page_speed_mobile !== 'undefined' ? (
						<a href={this.psiInsightsLink(info.frontmatter.url, 'mobile')}>
							<span className="pill">{info.frontmatter.page_speed_mobile}</span>
						</a>
					) : (
						''
					)}{' '}
					{info.frontmatter.page_speed_desktop !== 'undefined' ? (
						<a href={this.psiInsightsLink(info.frontmatter.url, 'desktop')}>
							<span className="pill pill-desktop">{info.frontmatter.page_speed_desktop}</span>
						</a>
					) : (
						''
					)}
				</span>
				{info.frontmatter.codeship_pid
					? this.renderCodeshipbadge(info.frontmatter.codeship_pid, info.frontmatter.codeship_uuid)
					: ''}{' '}
				{info.frontmatter.github_repo !== 'undefined' ? <img src="https://icon.now.sh/github" alt="" /> : ''}
				<img src="https://icon.now.sh/slack" alt="" style={{ marginLeft: '1rem' }} />
				<img
					onClick={this.toggleClass}
					src={`${this.state.active ? 'https://icon.now.sh/chevron/up' : 'https://icon.now.sh/chevron/down'}`}
					alt="Show Details"
					style={{ marginLeft: '1rem' }}
				/>
				<span className="oursites-item-details">
					<p>{info.frontmatter.description} </p>
				</span>
			</li>
		)
	}
}

export default SiteTableItem
