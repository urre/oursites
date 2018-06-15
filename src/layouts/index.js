import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import './index.css'

const Header = () => (
	<header className="header" role="banner">
		<h1 className="header-logo">Our Sites</h1>
	</header>
)

const Footer = () => (
	<footer className="footer" role="contentinfo">
		<p>
			<small>
				By <a href="https://urre.me">Urban Sanden</a>
			</small>
		</p>
	</footer>
)

const TemplateWrapper = ({ children }) => (
	<main>
		<Helmet
			title="Gatsby Default Starter"
			meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
		/>
		<Header />
		<section className="site-content">{children()} </section>
		<Footer />
	</main>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func
}

export default TemplateWrapper
