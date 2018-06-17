import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.css'

const TemplateWrapper = ({ children }) => (
	<main>
		<Helmet
			title="Our Sites"
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
