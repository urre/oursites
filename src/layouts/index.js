import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Media from 'react-media'

import './index.css'

const Header = () => (
	<header>
		<img src="https://sprintworks.se/images/favicon.png" alt="" />
		<h1>Sprintsites</h1>
	</header>
)

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Gatsby Default Starter"
			meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
		/>
		<Header />
		<div>{children()}</div>
	</div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func
}

export default TemplateWrapper
