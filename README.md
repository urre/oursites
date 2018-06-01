# Our Sites

> Not: Very wip

Collecting info about your websites. Built with [Gatsby](https://www.gatsbyjs.org/). The target audience are anyone that wants to keep track of their sites.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/urre/oursites)

* [Gatsby](https://www.gatsbyjs.org/) - Blazing-fast static site generator for React
* [Contentful](https://contentful.com) as CMS
* Hosted on [Netlify](https://netlify.com)
* Google PageSpeed Insights. Mobile/Desktop (Coming soon: resource stats)
* WhoIs data: Get registrar, expiration date

## Coming soon

* Codeship build status
* css stats
* Github issues/status
* Server versions
* SSL grades
* Trello integration
* Slack
* Uptime Robot
* More...

## Getting started

Create an `.env` file and add your Contentful Access Token.

### Install

    yarn install

### Get data

    cd tools

    node index.js

### Run

    yarn develop
