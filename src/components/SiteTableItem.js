import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import URL from 'url-parse'

class SiteTableItem extends React.Component {
	constructor(props) {
		super(props)
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
		return `${psiBase}/?url=${encodeURIComponent(url)}&tab=${strategy}`
	}

	codeshipBadgeURL(uuid, branch) {
		const codeshipBase = 'https://app.codeship.com/projects/'
		return `${codeshipBase}${uuid}/status?branch=${branch}`
	}

	codeshipBuildUrl(pid) {
		const codeshipBase = 'https://app.codeship.com/projects/'
		return `${codeshipBase}${pid}`
	}

	renderCodeshipBadge = (pid, uuid) => {
		return (
			<td className="oursites-item-page_codeship">
				<a href={this.codeshipBuildUrl(pid)} />
				<img src={this.codeshipBadgeURL(uuid, 'dev')} alt="Badge" />
			</td>
		)
	}

	render() {
		const info = this.props

		return (
			<tr className={`oursites-item ${this.state.active ? 'active' : null}`}>
				<td className="oursites-item-title">
					<Link to={info.frontmatter.path}>{info.frontmatter.title}</Link>
				</td>
				<td className="oursites-item-url">
					<a href={info.frontmatter.url}>{this.cleanURL(info.frontmatter.url)}</a>
				</td>
				<td className="oursites-item-registrar">{info.frontmatter.registrar}</td>
				<td className="oursites-item-expiration_date">{info.frontmatter.expiration_date}</td>
				<td className="oursites-item-page_speed">
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
				</td>
				<td>{info.frontmatter.css_size}</td>
				<td>{info.frontmatter.js_size}</td>
				<td className="oursites-item-details">
					<p>{info.frontmatter.description} </p>
				</td>
			</tr>
		)
	}
}

export default SiteTableItem
