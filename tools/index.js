'use strict'

const contentful = require('contentful')
const psi = require('psi')
const fs = require('fs')
const path = require('path')
const slugify = require('slugify')
const dayjs = require('dayjs')
const whois = require('whois-api')
const url = require('url')
const grabity = require('grabity')
const pretty = require('prettysize')

require('dotenv').load()

const client = contentful.createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const postsPerPage = 50

client
	.getEntries({
		// skip: postsPerPage,
		limit: postsPerPage,
		order: 'sys.createdAt'
	})
	.then(function(entries) {
		// console.dir(entries, {depth: null, colors: true})
		entries.items.forEach(function(entry) {
			let pageSpeedDesktop
			let pageSpeedMobile
			let cssSize
			let jsSize
			let registrar
			let expiration_date

			// Google Pagespeed Index Desktop
			psi(entry.fields.url, {
				nokey: 'true',
				strategy: 'desktop'
			}).then(data => {
				pageSpeedDesktop = data.ruleGroups.SPEED.score !== undefined ? data.ruleGroups.SPEED.score : ''
			})
			// Google Pagespeed Index Mobile
			psi(entry.fields.url, { nokey: 'true', strategy: 'mobile' })
				.then(data => {
					cssSize = pretty(data.pageStats.cssResponseBytes)
					jsSize = pretty(data.pageStats.javascriptResponseBytes)
					pageSpeedMobile = data.ruleGroups.SPEED.score !== undefined ? data.ruleGroups.SPEED.score : ''
				})
				// Whois
				.then(
					whois.lookup(url.parse(entry.fields.url).host, (error, result) => {
						expiration_date = result.expiration_date !== undefined ? result.expiration_date : ''
						registrar = result.registrar !== undefined ? result.registrar : ''
					})
				)
				.then(() => {
					// Save Markdown file
					let rightNow = new Date()
					const now = rightNow
						.toISOString()
						.slice(0, 10)
						.replace(/ /g, '-')

					const fileName = `${now}-${slugify(entry.fields.name, { replacement: '-', lower: true })}`

					const path = `${slugify(entry.fields.name)}`
					const name = `${entry.fields.name}`
					const github_repo = entry.fields.repoUrl
					const codeship_pid = entry.fields.codeshipProjectId
					const codeship_uuid = entry.fields.codeshipProjectUid
					const description = entry.fields.description

					const folderName = `../src/pages/posts/${slugify(fileName, {
						replacement: '-',
						lower: true
					})}`

					const markdown = `---\npath: "/${slugify(path, {
						replacement: '-',
						lower: true
					})}"\ndate: "${now}"\nurl: "${
						entry.fields.url
					}"\ntitle: "${name}"\nregistrar: "${registrar}"\nexpiration_date: "${expiration_date}"\npage_speed_desktop: "${pageSpeedDesktop}"\npage_speed_mobile: "${pageSpeedMobile}"\ncodeship_pid: "${codeship_pid}"\ncodeship_uuid: "${codeship_uuid}"\ncss_size: "${cssSize}"\njs_size: "${jsSize}"\ngithub_repo: "${github_repo}"\ndescription: "${description}"\n---\n\n`

					if (!fs.existsSync(folderName)) {
						fs.mkdirSync(folderName)
					}
					fs.writeFile(`${folderName}/index.md`, markdown, function(err) {
						if (err) {
							return console.log(err)
						}
						console.log(`${name} was saved!`)
					})
				})
		})
	})
