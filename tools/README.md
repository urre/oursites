# Sprintsites

A collection of our websites. WIP

* Contentful (CMS)
* Gatsby
* Whois API
* Google Page Speed PSI
* More coming...

## Read

Gatsby post types...

```
render () {
  const { dirname } = this.props.route.page.file
  if (dirname.includes('projects')) { // Using the ES2015 String.includes function.
    return <ProjectsMarkdownWrapper {...this.props} />
  } else if (dirname.includes('blog')) {
    return <BlogMarkdownWrapper {...this.props} />
  }
}
```
