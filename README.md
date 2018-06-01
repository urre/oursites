# Our Sites

> Note: Very wip

Collecting info about your websites. Built with [Gatsby](https://www.gatsbyjs.org/). The target audience are anyone that wants to keep track of their sites.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/urre/oursites)

* [Gatsby](https://www.gatsbyjs.org/) - Blazing-fast static site generator for React
* [Contentful](https://contentful.com) - Content infrastructure. Build-hook auto deploys to Netlify
* [Netlify](https://netlify.com) - continuous integration and global deployment

## Site data

* Google PageSpeed Insights. Mobile/Desktop
* Whois data: Registrar, Expiration date

### Todo

* PSUI Resource stats)
* Codeship build statuses
* css stats
* Github issues/statuses
* Server versions
* SSL grades
* Trello integration
* Slack
* Uptime Robot
* More...

## Getting started

### Install

    yarn install

### Get data

Create an `.env` file and add your Contentful Access Token.

    cd tools

    node index.js

### Run

    yarn develop
